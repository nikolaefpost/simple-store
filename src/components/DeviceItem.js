import React from 'react';
import {Button, Card, Col, Image} from "react-bootstrap";
import star from '../assets/star.png'
import {useHistory} from 'react-router-dom'
import {DEVICE_ROUTE} from "../utils/consts";
import {useMutation, useReactiveVar} from "@apollo/client";
import {cartBrandsVar} from "../store/cache";
import {DELETE_PRODUCT} from "../gql/query";

const DeviceItem = ({device}) => {
    const [deleteProduct, { data }] = useMutation(DELETE_PRODUCT);
    const history = useHistory();

    function handleClick() {
        // e.preventDefault();
        console.log({ filter: { id: device.id } })
        deleteProduct({ variables:{ filter: { id: device.id } }});
    }

    return (
        <Col md={3} className='mt-3'>
            <Card style={{width: 150, cursor: 'pointer'}} border={'light'}
                  onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
                <Image width={150} height={150} src={device.image_src}/>
                <div className='text-black-50 d-flex justify-content-between align-items-center mt-1'>
                    <div>{device.brand? device.brand.name: ''}</div>
                    <div className='d-flex align-items-center'>
                        <div>{device.quantity}</div>
                        <Image width={18} height={18} src={star}/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
            <Button variant='outline-danger' onClick={handleClick} >Удалить устройство</Button>
        </Col>
    );

};

export default DeviceItem;