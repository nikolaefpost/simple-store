import React from 'react';
import {useHistory, useParams} from 'react-router-dom'
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/BigStar.png'
import {useQuery, useReactiveVar} from "@apollo/client";
import {cartBasketVar, cartItemsVar} from "../store/cache";
import {REVIEW_ROUTE} from "../utils/consts";
import {GET_REVIEW_PRODUCT_ID} from "../gql/query";
import ReviewItems from "../components/ReviewItems";


const DevicePage = () => {



    const history = useHistory();
    const {id} = useParams()
    const cartItems = useReactiveVar(cartItemsVar);
    const cartBasket = useReactiveVar(cartBasketVar);
    const device = cartItems.filter(item => item.id === id)[0]
    const pursh = {device: device, s:1, id: device.id}

    let a = [...cartBasket];

    const { loading, error, data } = useQuery(GET_REVIEW_PRODUCT_ID, {
        variables: {filter: {id: id}}});
    if (loading) return <p>Loading...</p>;
    if (error) console.log(error);

    let rate = 5;
    let reviews = null;
    if (data){
        reviews = data.queryReview;
        const init = 0;
        rate = Math.round(reviews.reduce((acc, curr)=>acc+curr.rate, init)/reviews.length*10)/10;
    }


    function handleClick() {
        (!a.filter(item=> item.id === pursh.id).length>0) ? a.push(pursh): a.push();
        cartBasketVar(a)
    }

    return (
        <Container style={{marginTop:100}}>
            <Row>
                <Col md={4} >
                    <Image width='auto' height={300} src={device.image_src}/>
                </Col>
                <Col md={4}>
                    <Row className='d-flex flex-column align-items-center'>
                        <h2>{device.description_shot}</h2>
                        <div className='d-flex align-items-center justify-content-center'
                             style={{
                                 background: `url(${bigStar}) no-repeat center center`,
                                 width: 240, height: 240, backgroundSize: 'cover', fontSize: 64
                             }}>
                            {rate}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card className='d-flex flex-column align-items-center justify-content-around'
                          style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}>
                        <h3>От {device.price} гр.</h3>
                        <Button variant={'outline-dark'} onClick={handleClick}>Добавить в корзину</Button>
                    </Card>

                </Col>
            </Row>
            <h1>Характеристики</h1>
            <Row className='d-flex flex-column  m-3'>
                <div>{device.description_long}</div>
            </Row>
            <Row className='d-flex flex-column  m-3 mb-5'>

                {device.specification.map((info, index) =>
                    <Row key={info.id}
                         style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title} : {info.description}
                    </Row>
                )}
            </Row>
            <Row className='align-items-center mb-3 mt-5'>
                <Col md={2} >
                    <h5 className='text-success'>Отзывы:</h5>
                </Col>
                <Col md={2} >
                    <Button variant="success"
                            onClick={() => {history.push(REVIEW_ROUTE + '/' + device.id + '/' + device.description_shot) }}
                    >Написать отзыв
                    </Button>
                </Col>
            </Row>
            {reviews && reviews.map((rev) =>
                <ReviewItems key={rev.id} review={rev}>

                </ReviewItems>
            )}
        </Container>
    );
};

export default DevicePage;