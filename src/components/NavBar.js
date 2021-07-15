import React from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import {useHistory} from 'react-router-dom'
import { useReactiveVar } from '@apollo/client';
import {GetBrands, GetCategory, GetProducts, userIsLogin} from "../store/cache";
import UserAvatar from "./UserAvatar";



const NavBar =  () => {

    const history = useHistory();
    const user = useReactiveVar(userIsLogin)
    console.log(user)

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink to={SHOP_ROUTE} style={{color: 'white'}}>Happy Buy</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        {user.isAdmin ?
                            <Button variant={'outline-light'}
                                 onClick={() => {

                                     history.push(ADMIN_ROUTE)
                                 }}
                                 className='ml-2'>
                            Админ панель
                        </Button>:
                            <div/>
                        }

                        <Button variant={'outline-light'}
                                onClick={()=> {
                                    history.push(LOGIN_ROUTE)
                                    userIsLogin({...user, isAuth: false})
                                }}
                                className='ml-2'>
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={'outline-light'} onClick={()=>userIsLogin({...user, isAuth: true})}>Авторизация</Button>
                    </Nav>
                }
                {user.isAuth ?
                    <UserAvatar/>:<div/>
                }
            </Container>

        </Navbar>
    );
};

export default NavBar;