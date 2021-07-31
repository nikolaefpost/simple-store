import React from 'react';
import {Container, Form, Button, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useHistory} from "react-router-dom";
import { SHOP_ROUTE} from "../utils/consts";
import { useReactiveVar} from "@apollo/client";
import {userIsLogin, authNameVar} from "../store/cache";

const isAuth = false;
const Auth = () => {
    const history = useHistory();
    const user = useReactiveVar(userIsLogin)
    let input_name, input_pwd;

    return (
        <Container className='d-flex justify-content-center align-items-center'
                   style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className='p-5'>
                <h2 className='m-auto'>Авторизация</h2>
                <Form className='d-flex flex-column' onSubmit={e => {
                    e.preventDefault();
                    authNameVar(input_name.value)



                    userIsLogin({...user, isAuth: true, name: input_name.value, pwd: input_pwd.value})
                    history.push(SHOP_ROUTE)
                }}>
                    <Form.Control
                        className='mt-2' placeholder='Введите ваш логин...'
                        ref={node => {input_name = node;}}
                    />
                    <Form.Control
                        className='mt-2' placeholder='Введите ваш пароль...' type="password"
                        ref={node => {input_pwd = node;}}
                    />
                    <Row className='d-flex justify-content-between align-items-center mt-3 px-3'>

                        <Button variant={'outline-success'} type="submit">
                            Войти
                        </Button>
                    </Row>

                </Form>
            </Card>


        </Container>
    );
};

export default Auth;