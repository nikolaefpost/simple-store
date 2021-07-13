import React from 'react';
import {Container, Form, Button, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {useMutation, useReactiveVar} from "@apollo/client";
import { ADD_USER} from "../gql/query";
import {userIsLogin} from "../store/cache";


const Auth = () => {
    const history = useHistory();
    const user = useReactiveVar(userIsLogin)
    let input_name, input_phone, input_email;
    const [addUser, { data }] = useMutation(ADD_USER);

    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE;

    return (
        <Container className='d-flex justify-content-center align-items-center'
                   style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className='p-5'>
                <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className='d-flex flex-column' onSubmit={e => {
                    e.preventDefault();
                    addUser({ variables: {
                            user_name: input_name.value,
                            phone: Number(input_phone.value),
                            email: input_email.value
                    } });
                    userIsLogin({...user, isAuth: true, name: input_name.value})
                    history.push(SHOP_ROUTE)
                }}>
                    <Form.Control
                        className='mt-2' placeholder='Введите ваш логин...'
                        ref={node => {input_name = node;}}
                    />
                    <Form.Control
                        className='mt-2' placeholder='Введите ваш email...'
                        ref={node => {input_email = node;}}
                    />
                    <Form.Control
                        className='mt-2' placeholder='Введите ваш телефон...'
                        ref={node => {input_phone = node;}}
                    />
                    {/*<Form.Control*/}
                    {/*    className='mt-3'*/}
                    {/*    placeholder='Введите ваш пароль...'*/}
                    {/*/>*/}
                    <Row className='d-flex justify-content-between align-items-center mt-3 px-3'>
                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Водите!</NavLink>
                            </div>
                        }
                        <Button variant={'outline-success'} type="submit">
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>
                    </Row>

                </Form>
            </Card>


        </Container>
    );
};

export default Auth;