import React from 'react';

const PurchaseFull = (props) => {
    return (
        <div className='text-light bg-secondary p-2 row align-items-center' >
            <img className='col-1' src={props.device.image_src} alt='device' width={64} height={64}  />
            <div className='col-3'>{props.device.name}</div>
            <div className='col-2'>{props.device.price} ₴</div>
            <div className='col-1'>{props.quantity} шт.</div>
            <div className='col-2'>{props.buyTime}</div>
            <div className='col-2'>Статус доставки</div>
            {props.done? <input type='checkbox' checked className='col-1'/>: <input type='checkbox' className='col-1'/>
            }
        </div>
    );
};

export default PurchaseFull;