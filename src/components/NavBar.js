import React, {useContext} from 'react';
import {Context} from "../index";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import Button from "react-bootstrap/Button";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useHistory} from 'react-router-dom'
import { useReactiveVar } from '@apollo/client';
import {cartItemsVar, userIsLogin} from "../store/cache";



const NavBar = observer( () => {
    // const {user} = useContext(Context);
    const history = useHistory();
    const cartItems = useReactiveVar(cartItemsVar);
    const user = useReactiveVar(userIsLogin)
console.log(cartItemsVar)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink to={SHOP_ROUTE} style={{color: 'white'}}>Happy Buy</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={'outline-light'}
                                onClick={()=>history.push(ADMIN_ROUTE)}
                                className='ml-2'>
                            Админ панель
                        </Button>
                        <Button variant={'outline-light'}
                                onClick={()=>history.push(LOGIN_ROUTE)}
                                className='ml-2'>
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={'outline-light'} onClick={()=>userIsLogin({isAuth: true})}>Авторизация</Button>
                    </Nav>
                }
            </Container>

        </Navbar>
    );
});

export default NavBar;