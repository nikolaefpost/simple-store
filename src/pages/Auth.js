import React, {useState} from 'react';
import {Container, Form, Button, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {useMutation, useQuery, useReactiveVar} from "@apollo/client";
import {ADD_USER, GET_USER} from "../gql/query";
import {userIsLogin, userVar} from "../store/cache";

const isAuth = false;
const Auth = () => {
    const history = useHistory();
    const user = useReactiveVar(userIsLogin)
    let input_name;
    const [user_name, setUser_name] = useState('');
    const { loading, error, data } = useQuery(GET_USER, {
        variables: { user_name }});
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    console.log(data)
    userVar(data)


    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE;

    return (
        <Container className='d-flex justify-content-center align-items-center'
                   style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className='p-5'>
                <h2 className='m-auto'>Авторизация</h2>
                <Form className='d-flex flex-column' onSubmit={e => {
                    e.preventDefault();
                    setUser_name(input_name.value)
                    // addUser({ variables: {
                    //         user_name: input_name.value,
                    //     } });
                    userIsLogin({...user, isAuth: true, name: input_name.value})
                    history.push(SHOP_ROUTE)
                }}>
                    <Form.Control
                        className='mt-2' placeholder='Введите ваш логин...'
                        ref={node => {input_name = node;}}
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