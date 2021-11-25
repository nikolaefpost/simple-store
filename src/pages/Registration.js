import React, {useState} from 'react';
import {Container, Form, Button, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useHistory} from "react-router-dom";
import { SHOP_ROUTE} from "../utils/consts";
import {useMutation} from "@apollo/client";
import { ADD_USER} from "../gql/query";
import {authNameVar, userIsLogin} from "../store/cache";




const Registration = () => {
    const history = useHistory();

    const [validated, setValidated] = useState(false);
    let input_name, input_phone, input_email, input_pwd, input_img;
    const [addUser, {data}] = useMutation(ADD_USER);
    const createUser = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        setValidated(true);
        e.preventDefault();
        let phone = Number(input_phone.value)
        if(!phone) phone = 0;


        console.log({ variables: {
                user_name: input_name.value,
                pwd: input_pwd.value,
                phone: Number(input_phone.value),
                email: input_email.value,
                image: input_img.value,
                role: 'buyer'

            } })
            addUser({ variables: {
                user_name: input_name.value,
                pwd: input_pwd.value,
                phone: phone,
        email: input_email.value,
        image: input_img.value,
        role: 'buyer'

 } });
    const n = input_name.value;
    const p = input_pwd.value;
    setTimeout(()=> {
        userIsLogin(true)
        authNameVar({name: n, pwd: p})
    }, 2000)

    history.push(SHOP_ROUTE)
    }
    return (
        <Container className='d-flex justify-content-center align-items-center'
                   style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className='p-5'>
                <h2 className='m-auto'>Регистрация</h2>
                <Form className='d-flex flex-column' validated={validated} onSubmit={createUser}>
                    <Form.Control
                        type="text"
                        className='mt-2' placeholder='Введите ваш логин...'
                        ref={node => {input_name = node;}}
                        required
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control
                        type="password"
                        className='mt-2' placeholder='Введите ваш пароль...'
                        ref={node => {input_pwd = node;}}
                        required
                    />
                    <Form.Control
                        className='mt-2' placeholder='Введите ваш image...'
                        ref={node => {input_img = node;}}
                    />
                    <Form.Control
                        type="email"
                        // placeholder="name@example.com"
                        placeholder='Введите ваш email...'
                        className='mt-2'
                        ref={node => {input_email = node;}}
                    />
                    <Form.Control
                        type="tel"
                        className='mt-2' placeholder='Введите ваш телефон...'
                        ref={node => {input_phone = node;}}
                        required
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