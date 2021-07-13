import React from 'react';
import { useParams} from 'react-router-dom'
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/BigStar.png'
import {useReactiveVar} from "@apollo/client";
import {cartItemsVar} from "../store/cache";

const DevicePage = () => {
    const {id} = useParams()
    const cartItems = useReactiveVar(cartItemsVar);
    console.log(cartItems)
    const device = cartItems.filter(item => item.id === id)[0]


    console.log(device)


    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src='http://lorempixel.com/300/400/technics' />
                </Col>
                <Col md={4}>
                    <Row className='d-flex flex-column align-items-center'>
                        <h2>{device.name}</h2>
                        <div className='d-flex align-items-center justify-content-center'
                             style={{background: `url(${bigStar}) no-repeat center center`,
                                 width: 240, height: 240, backgroundSize: 'cover', fontSize: 64}}>
                            {5}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card className='d-flex flex-column align-items-center justify-content-around'
                    style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}>
                        <h3>От {device.price} гр.</h3>
                        <Button variant={'outline-dark'}>Добавить в корзину</Button>
                    </Card>

                </Col>
            </Row>
            <h1>Характеристики</h1>
            <Row className='d-flex flex-column  m-3'>
                <div>{device.description_long}</div>
            </Row>
            <Row className='d-flex flex-column  m-3'>

                {device.specification.map((info, index)=>
                    <Row key={info.id}
                         style={{background: index%2===0? 'lightgray': 'transparent', padding: 10}}>
                        {info.title} : {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;