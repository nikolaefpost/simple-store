import {useReactiveVar} from "@apollo/client";
import {cartamountPurchasesVar, cartBasketVar} from "../store/cache";
import {Button} from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import React, {useState} from "react";


const Purchase = ({device, handleClick}) => {
    const [value, setValue] = useState(device.device.s);
    device = {...device, s:value}
    const listBasket = useReactiveVar(cartBasketVar);

    return (
        <ListGroup.Item  className='d-flex justify-content-between align-items-center'>
            <div className='d-flex  align-items-center flex-fill'>
                <img src={device.device.image_src} alt='device' width={64}/>
                <p className='ml-4 mb-0'>{device.device.name}</p>
            </div>
            <input type='number' defaultValue='1'  style={{width: '50px'}} onChange={event => {
                setValue(event.target.value);
                console.log(listBasket)
                listBasket.map(u=>{
                    if (u.device.id===device.device.id)  u.s=Number(event.target.value)
                })
                cartBasketVar(listBasket)
                const initialValue = 0;
                const amountPurchases = listBasket.reduce((acc, cur) => {
                    return acc + cur.device.price * cur.s
                }, initialValue)

                cartamountPurchasesVar(amountPurchases)
            }}/>
            <p className='text-center w-25 mb-0'>{device.device.price} ₴.</p>
            <Button variant="danger" className='ml-2' onClick={() => handleClick(device.device.id)}>x</Button>
        </ListGroup.Item>
    );
};

export default Purchase;