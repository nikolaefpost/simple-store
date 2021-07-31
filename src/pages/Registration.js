import React from 'react';
import {Container, Form, Button, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useHistory, useLocation} from "react-router-dom";
import { SHOP_ROUTE} from "../utils/consts";
import {useMutation} from "@apollo/client";
import { ADD_USER} from "../gql/query";
import {userIsLogin} from "../store/cache";


const Registration = () => {
    const history = useHistory();
    let input_name, input_phone, input_email, input_pwd, input_img;

    const [addUser, {data}] = useMutation(ADD_USER);

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
                            pwd: input_pwd.value,
                            phone: Number(input_phone.value),
                            email: input_email.value,
                            image: input_img.value,
                            role: 'buyer'

                    } });
                    const n = input_name.value;
                    const p = input_pwd.value;
                    setTimeout(()=>userIsLogin({ isAuth: true, name: n, pwd: p}), 2000)

                    history.push(SHOP_ROUTE)
                }}>
                    <Form.Control
                        className='mt-2' placeholder='Введите ваш логин...'
                        ref={node => {input_name = node;}}
                    />
                    <Form.Control
                        className='mt-2' placeholder='Введите ваш пароль...'
                        ref={node => {input_pwd = node;}} type="password"
                    />
                    <Form.Control
                        className='mt-2' placeholder='Введите ваш image...'
                        ref={node => {input_img = node;}}
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