import React, {useState} from 'react';
import {useMutation, useReactiveVar} from "@apollo/client";
import {cartamountPurchasesVar, cartBasketVar, userIsLogin} from "../store/cache";
import ListGroup from "react-bootstrap/ListGroup";
import {Button, Container, Row} from "react-bootstrap";
import Purchase from "../components/Purchase";
import {useHistory} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";
import {ADD_PURCHASE} from "../gql/query";

const Basket = () => {
    const history = useHistory();
    const listBasket = useReactiveVar(cartBasketVar);
    const user = useReactiveVar(userIsLogin)
    console.log(listBasket[0])

    const initial = 0;
    cartamountPurchasesVar(listBasket.reduce((acc, cur) => {
        return acc + cur.device.price * cur.s
    }, initial))
    const amount = useReactiveVar(cartamountPurchasesVar);

    let input_name, input_surname, input_phone, input_address;
    const [addPurchases, {data}] = useMutation(ADD_PURCHASE);

    // const [itemPurchases, setItemPurchases] = useState([]);
    // const [info, setInfo] = useState([])
    // let input;
    // const addInfo = () => {
    //
    //         setInfo([{
    //             title: '',
    //             description: '',
    //             number: Date.now()
    //         }])
    //     }
    const removeItem = (number) => {
        cartBasketVar([...listBasket].filter(i => i.device.id !== number))
    }
    return (

        <Container className='mt-3'>
            <form onSubmit={e => {
                e.preventDefault();
                listBasket.map(purchas => addPurchases({
                    variables: {
                        choose_product: {id: purchas.id},
                        quantity: purchas.s,
                        buyer: {user_name: user.name},
                        buyTime: new Date()
                    }
                }))
                ;
                // input.value = '';
            }}>
                <h3 className='text-center'>Корзина</h3>
                <ListGroup className='mb-5'>
                    {listBasket.map(device =>
                        <Purchase key={device.device.id} device={device}
                                  handleClick={removeItem}>{device.name}</Purchase>
                    )}
                </ListGroup>
                <Container>
                    <Row className='ml-0 mr-0 mt-3 justify-content-center'>
                        <input className='p-2 m-2 w-25' type='text' placeholder='Имя' ref={node => {
                            input_name = node;
                        }}/>
                        <input className='p-2 m-2 w-25' type='text' placeholder='Фамилия' ref={node => {
                            input_surname = node;
                        }}/>
                    </Row>
                    <Row className='ml-0 mr-0 mt-3 justify-content-center'>
                        <input className='p-2 m-2 w-50' type='text' placeholder='Телефон' ref={node => {
                            input_phone = node;
                        }}/>
                        <input className='p-2 m-2 w-50' type='text' placeholder='Адрес' ref={node => {
                            input_address = node;
                        }}/>
                    </Row>
                </Container>
                <div className='d-flex mt-5 justify-content-between align-items-center'>
                    <Button variant='outline-success' onClick={() => history.push(SHOP_ROUTE)}>Продолжить
                        покупки</Button>
                    <div className='border border-success rounded p-3'>
                        {amount}₴
                        <Button variant="success" className='ml-2' type="submit"> Оформить
                            заказ</Button>
                    </div>

                </div>


            </form>
        </Container>
    );
};

export default Basket;