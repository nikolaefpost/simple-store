import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import Footer from "../components/Footer";
import Chat from "../Service/Chat";



const Shop = () => {


    return (<>
        <Container style={{marginBottom:250, marginTop: 70}}>
            <Row className='mt-2'>
                <Col md={3}>
                    <TypeBar/>
                    <Chat/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <DeviceList/>
                </Col>
            </Row>
        </Container>
    <Footer/>
    </>
    );
};

export default Shop;