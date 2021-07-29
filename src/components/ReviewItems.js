import React from 'react';

const ReviewItems = (props) => {
    console.log(props)
    return (
        <div className='py-3 px-4 shadow rounded bg-light mb-5'>
            <div className='d-flex align-items-center mb-3'>
                <div className='mr-3 text-success'><i className="bi bi-cart4"></i> {props.review.userId.user_name}</div>
                <span className='mr-1'>{props.review.rate}</span>
                <i className="bi bi-star-fill  mr-3" style={{ color: 'gold'}}></i>
                <h2 className=''>{props.review.conclusion}</h2>
            </div>
            <div className='mb-3'>{props.review.comment}</div>
            <div className='d-flex mb-3'>
                <i className="bi bi-plus-circle-fill" style={{ color: 'green'}}></i>
                <div className='ml-3'>{props.review.dignity}</div>
            </div>
            <div className='d-flex'>
                <i className="bi bi-dash-circle-fill" style={{ color: 'red'}}></i>
                <div className='ml-3'>{props.review.flaws}</div>
            </div>
        </div>
    );
};

export default ReviewItems;