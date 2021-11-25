import React from 'react';
import Container from "react-bootstrap/Container";
import {NavLink, useHistory} from "react-router-dom";
import {ADMIN_ROUTE, AUTH_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, TODO_ROUTE} from "../utils/consts";
import BacketIcons from "./BacketIcons";
import Search from "./Search";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import {isAdminVar, userIsLogin, userVar} from "../store/cache";
import UserAvatar from "./UserAvatar";
import Navbar from "react-bootstrap/Navbar";
import { useReactiveVar} from '@apollo/client';

const NabarView = ({isAdmin, data, goToPersonalPage}) => {
    const history = useHistory();
    const user = useReactiveVar(userIsLogin)
    return (
        <>
            <Navbar bg="dark" variant="dark" fixed="top">
                <Container>

                    <NavLink to={SHOP_ROUTE} style={{color: 'white'}}>Happy Buy</NavLink>
                    <BacketIcons />
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
                                         userIsLogin({isAuth: false, name: 'unregistered', pwd: ''})
                                         localStorage.setItem ("registeredUser", null);
                                         isAdminVar(false);
                                         userVar(null)
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
                    {user.isAuth && <UserAvatar user={data.checkUserPassword} onClick={goToPersonalPage}/>}

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
       </>
    );
};

export default NabarView;