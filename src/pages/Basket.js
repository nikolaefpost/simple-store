import React, {useState} from 'react';
import {useReactiveVar} from "@apollo/client";
import {cartamountPurchasesVar, cartBasketVar} from "../store/cache";
import ListGroup from "react-bootstrap/ListGroup";
import {Button, Container, Row} from "react-bootstrap";
import Purchase from "../components/Purchase";
import {useHistory} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";

const Basket = () => {
    const history = useHistory();
    const listBasket = useReactiveVar(cartBasketVar);
    console.log(listBasket)
    const initial = 0;
    const amountPurchases = listBasket.reduce((acc, cur) => {
        return acc + cur.device.price * cur.s
    }, initial)

    cartamountPurchasesVar(amountPurchases)


    const amount = useReactiveVar(cartamountPurchasesVar);
    const [itemPurchases, setItemPurchases] = useState([]);
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
            <form>
                <h3 className='text-center'>Корзина</h3>
                <ListGroup className='mb-5'>
                    {listBasket.map(device =>
                        <Purchase key={device.device.id} device={device}
                                  handleClick={removeItem}>{device.name}</Purchase>
                    )}
                </ListGroup>
                <Container>
                    <Row className='ml-0 mr-0 mt-3 justify-content-center'>
                        <input className='p-2 m-2 w-25' type='text' placeholder='Имя'/><input className='p-2 m-2 w-25' type='text' placeholder='Фамилия'/>
                    </Row>
                    <Row className='ml-0 mr-0 mt-3 justify-content-center'>
                        <input className='p-2 m-2 w-50' type='text' placeholder='Телефон'/><input className='p-2 m-2 w-50' type='text' placeholder='Адрес'/>
                    </Row>
                </Container>
                <div className='d-flex mt-5 justify-content-between align-items-center'>
                    <Button variant='outline-success' onClick={() => history.push(SHOP_ROUTE)}>Продолжить
                        покупки</Button>
                    <div className='border border-success rounded p-3'>
                        {amount}₴
                        <Button variant="success" className='ml-2' onClick={() => console.log(amount)}> Оформить
                            заказ</Button>
                    </div>

                </div>


            </form>
        </Container>
    );
};

export default Basket;