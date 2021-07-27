import React, {useState} from 'react';
import {UPDATE_DONE_PURCHASE} from "../gql/query";
import {useMutation} from "@apollo/client";

const TodoItems = (props) => {
    const [todo, setTodo] = useState(props.purchase.done);
    const [updatePurchase] = useMutation(UPDATE_DONE_PURCHASE);
    return (
        <div className='text-light bg-dark px-4 py-2 row align-items-center mb-1' >
            <div className='col-2'>{props.purchase.choose_product.name}</div>
            <div className='col-1 text-center'>{props.purchase.choose_product.id}</div>
            <div className='col-1 text-center'>{props.purchase.quantity}</div>
            <div className='col-1 text-center'>{new Date(props.purchase.buyTime).toLocaleDateString()}</div>
            <div className='col-1 text-center'>{props.purchase.first_name +' '+props.purchase.surname}</div>
            <div className='col-1 text-center'>{props.purchase.phone}</div>
            <div className='col-2 text-center'>{props.purchase.address}</div>
            <div className='col-2 text-center'>{props.purchase.note}</div>
            <input type='checkbox' checked={todo} onChange={() => {

                updatePurchase({
                    variables: {
                        patch:
                            {
                                filter: {
                                    id: props.purchase.id
                                },
                                set: {
                                    done: !todo
                                }
                            }
                    }
                })
                setTodo(!todo)
            }} className='col-1'/>

        </div>
    );
};

export default TodoItems;