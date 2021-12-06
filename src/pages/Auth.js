import React, {useState} from 'react';
import {Container, Form, Button, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useHistory} from "react-router-dom";
import { SHOP_ROUTE} from "../utils/consts";
import { useReactiveVar} from "@apollo/client";
import {authNameVar, errorVar, userIsLogin} from "../store/cache";


const Auth = () => {
    const history = useHistory();
    let input_name, input_pwd;
    // const [error, setError] = useState(false)
    const isAuth = useReactiveVar(userIsLogin)
    if (isAuth) history.push(SHOP_ROUTE)
    const error = useReactiveVar(errorVar)

    return (
        <Container className='d-flex justify-content-center align-items-center'
                   style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className='p-5'>
                <h2 className='m-auto'>Авторизация</h2>
                {error && <div className='m-auto text-danger'>логин или пароль введен не правильно</div>}
                <Form
                    className='d-flex flex-column'
                    style={{border: error? '1px solid red': 'none'} }
                    onSubmit={e => {
                    e.preventDefault();
                    authNameVar({name: input_name.value, pwd: input_pwd.value})
                    }}
                    onFocus={()=>errorVar(false)}
                >
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