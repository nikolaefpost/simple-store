import React from 'react';
import {Button, Card, Col, Image} from "react-bootstrap";
import {useHistory} from 'react-router-dom'
import {DEVICE_ROUTE} from "../utils/consts";
import {useMutation, useReactiveVar} from "@apollo/client";
import { isAdminVar} from "../store/cache";
import {DELETE_PRODUCT} from "../gql/query";

const DeviceItem = ({device}) => {
    const [deleteProduct, { data }] = useMutation(DELETE_PRODUCT);
    const history = useHistory();
    const isAdmin = useReactiveVar(isAdminVar)

    function handleClick() {
        deleteProduct({ variables:{ filter: { id: device.id } }});
    }

    return (
        <Col md={3} className='mt-3 '>
            <Card style={{width: 150, cursor: 'pointer'}} border={'light'}
                  onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
                <div className='text-center'><Image width='auto' height={150} src={device.image_src}/></div>

                <div className='text-black-50 d-flex justify-content-between align-items-center mt-1'>
                    <div>{device.brand? device.brand.name: ''}</div>
                    <div className='d-flex align-items-center'>
                        <div>{device.price} ₴</div>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
            {isAdmin &&
            <Button variant='outline-danger' onClick={handleClick}>Удалить устройство</Button>
            }
        </Col>
    );

};

export default DeviceItem;