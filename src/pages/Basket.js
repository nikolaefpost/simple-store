import React from 'react';
import {useReactiveVar} from "@apollo/client";
import {cartBasketVar} from "../store/cache";
import ListGroup from "react-bootstrap/ListGroup";
import DeviceItem from "../components/DeviceItem";
import {Container, Row} from "react-bootstrap";

const Basket = () => {
    const listBasket = useReactiveVar(cartBasketVar);

    // const removeDevice = (number) => {
    //     setInfo(info.filter(i => i.number !== number))
    // }
    return (

        <Container className='mt-3'>
            <h3 className='text-center'>Корзина</h3>
                <ListGroup>
                    {listBasket.map(device =>
                        <ListGroup.Item key={device.id} device={device}>{device.name}</ListGroup.Item>
                    )}
                </ListGroup>

        </Container>
    );
};

export default Basket;