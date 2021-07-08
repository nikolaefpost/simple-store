import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import DeviceItem from "./DeviceItem";
import {useReactiveVar} from "@apollo/client";
import {cartItemsVar} from "../store/cache";

const DeviceList = observer( () => {
    // const {device} = useContext(Context)
    const cartItems = useReactiveVar(cartItemsVar);
    return (
        <Row className='d-flex'>
            {cartItems.map(device=>
                <DeviceItem key={device.id} device={device}/>

            )}
        </Row>
    );
});

export default DeviceList;