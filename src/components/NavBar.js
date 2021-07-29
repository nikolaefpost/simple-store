import React from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";
import { Form,  FormControl} from 'react-bootstrap';
import {
    ADMIN_ROUTE,
    AUTH_ROUTE,
    BASKET_ROUTE,
    LOGIN_ROUTE,
    PERSONAL_ROUTE,
    SHOP_ROUTE, TODO_ROUTE
} from "../utils/consts";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import {useHistory} from 'react-router-dom'
import {useQuery, useReactiveVar} from '@apollo/client';
import {isAdminVar, userIsLogin, userVar} from "../store/cache";
import UserAvatar from "./UserAvatar";
import {GET_USER} from "../gql/query";
import Icons from "./Icons";
import Search from "./Search";




const NavBar = () => {

    const history = useHistory();
    const user = useReactiveVar(userIsLogin)
    const isAdmin = useReactiveVar(isAdminVar)
    const handleClick = ()=> history.push(PERSONAL_ROUTE)

    const { loading, error, data } = useQuery(GET_USER, {
        variables: { "user_name": user.name }});
    if (loading) return <p>Loading...</p>;
    if (error) console.log(error);
    if (data && data.getUser){
        isAdminVar( data.getUser.role==='admin' ? true: false)
        localStorage.setItem ("registeredUser", JSON.stringify(data.getUser));
        userVar(data.getUser)
    }


    return (
        <Navbar bg="dark" variant="dark" fixed="top">
            <Container>

                <NavLink to={SHOP_ROUTE} style={{color: 'white'}}>Happy Buy</NavLink>
                <Icons />
                <Search/>

                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        {isAdmin &&
                        <div>
                            <Button variant={'outline-light'}
                                    onClick={() => {

                                        history.push(ADMIN_ROUTE)
                                    }}
                                    className='ml-2'>
                                админ панель
                            </Button>
                            <Button variant={'outline-light'}
                                    onClick={() => {

                                        history.push(TODO_ROUTE)
                                    }}
                                    className='ml-2 mr-4'>
                                заказы
                            </Button>

                        </div>
                        }

                        <NavLink to={LOGIN_ROUTE} style={{color: 'white'}} className='mr-4 align-self-center'
                                 onClick={() => {
                                     history.push(LOGIN_ROUTE)
                                     userIsLogin({isAuth: false, name: 'unregistered'})
                                     localStorage.setItem ("registeredUser", null);
                                     isAdminVar(false);
                                 }}
                        >Выйти</NavLink>

                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>

                        <Button variant={'outline-light'}
                                onClick={() => {
                                    history.push(AUTH_ROUTE)
                                }} className='mr-2'>Войти
                        </Button>
                        <Button variant={'outline-light'}
                                onClick={() => {
                                    history.push(LOGIN_ROUTE)
                                }}>Регистрация
                        </Button>
                    </Nav>
                }

                {user.isAuth && <UserAvatar user={data.getUser} onClick={handleClick}/>}

                {/*<Button variant={'outline-light'}*/}
                {/*        onClick={() => {*/}

                {/*            history.push(PROFILE_ROUTE)*/}
                {/*        }}*/}
                {/*        className='ml-2'>*/}
                {/*    Profile*/}
                {/*</Button>*/}
                {/*<AuthNav/>*/}
            </Container>

        </Navbar>
    );
};

export default NavBar;