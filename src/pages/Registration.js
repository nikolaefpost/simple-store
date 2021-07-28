import React from 'react';
import {Container, Form, Button, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useHistory, useLocation} from "react-router-dom";
import { LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {useMutation, useReactiveVar} from "@apollo/client";
import { ADD_USER} from "../gql/query";
import {userIsLogin} from "../store/cache";


const Registration = () => {
    const history = useHistory();
    // const user = useReactiveVar(userIsLogin)
    let input_name, input_phone, input_email;

    const [addUser, {data}] = useMutation(ADD_USER);


    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE;

    return (
        <Container className='d-flex justify-content-center align-items-center'
                   style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className='p-5'>
                <h2 className='m-auto'>Регистрация</h2>
                <Form className='d-flex flex-column' onSubmit={e => {
                    e.preventDefault();
                    addUser({ variables: {
                            user_name: input_name.value,
                            phone: Number(input_phone.value),
                            email: input_email.value,
                            image: null,
                            role: 'buyer'

                    } });
                    const q = input_name.value;
                    setTimeout(()=>userIsLogin({ isAuth: true, name: q}), 2000)

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
                    <Row className='d-flex justify-content-between align-items-center mt-3 px-3'>

                        <Button variant={'outline-success'} type="submit">
                            За покупками
                        </Button>
                    </Row>

                </Form>
            </Card>


        </Container>
    );
};

export default Registration;