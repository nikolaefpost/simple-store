import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/BigStar.png'

const DevicePage = () => {
    const device =  {id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5,
        img: 'http://lorempixel.com/300/400/technics'};
    const description = [
        {id: 1, title: 'Оперативная память', description: '6 гб'},
        {id: 2, title: 'Оперативная память', description: '6 гб'},
        {id: 3, title: 'Оперативная память', description: '6 гб'},
        {id: 4, title: 'Оперативная память', description: '6 гб'},
        {id: 5, title: 'Оперативная память', description: '6 гб'},
        {id: 6, title: 'Оперативная память', description: '6 гб'},
        {id: 7, title: 'Оперативная память', description: '6 гб'},
        {id: 8, title: 'Оперативная память', description: '6 гб'},
        {id: 9, title: 'Оперативная память', description: '6 гб'}
    ]
    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img} />
                </Col>
                <Col md={4}>
                    <Row className='d-flex flex-column align-items-center'>
                        <h2>{device.name}</h2>
                        <div className='d-flex align-items-center justify-content-center'
                             style={{background: `url(${bigStar}) no-repeat center center`,
                                 width: 240, height: 240, backgroundSize: 'cover', fontSize: 64}}>
                            {device.rating}
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

                {description.map((info, index)=>
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