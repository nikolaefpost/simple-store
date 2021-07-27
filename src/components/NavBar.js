import React from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";
import {
    ADMIN_ROUTE,
    AUTH_ROUTE,
    BASKET_ROUTE,
    LOGIN_ROUTE,
    PERSONAL_ROUTE,
    PROFILE_ROUTE,
    SHOP_ROUTE, TODO_ROUTE
} from "../utils/consts";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import {useHistory} from 'react-router-dom'
import {useReactiveVar} from '@apollo/client';
import {GetBrands, GetCategory, GetProducts, isAdminVar, userIsLogin, userVar} from "../store/cache";
import UserAvatar from "./UserAvatar";
import LoginButton from "./login-button";
import AuthNav from "./auth-nav";


const NavBar = () => {

    const history = useHistory();
    const user = useReactiveVar(userIsLogin)
    const isAdmin = useReactiveVar(isAdminVar)
    const handleClick = ()=> history.push(PERSONAL_ROUTE)

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink to={SHOP_ROUTE} style={{color: 'white'}}>Happy Buy</NavLink>
                <Button variant={'outline-light'}
                        onClick={() => {

                            history.push(BASKET_ROUTE)
                        }}
                        className='ml-5'>
                    Корзина
                </Button>
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
                                    className='ml-2'>
                                заказы
                            </Button>

                        </div>
                        }

                        <Button variant={'outline-light'}
                                onClick={() => {
                                    history.push(LOGIN_ROUTE)
                                    userIsLogin({isAuth: false, name: null})
                                    localStorage.setItem ("registeredUser", null);
                                }}
                                className='ml-2'>
                            Выйти
                        </Button>

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

                {user.isAuth && <UserAvatar user={user} onClick={handleClick}/>}

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