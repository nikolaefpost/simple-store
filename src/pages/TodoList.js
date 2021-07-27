import React from 'react';
import {useMutation, useQuery} from "@apollo/client";
import {GET_PURCHASES, UPDATE_DONE_PURCHASE, UPDATE_PRODUCT} from "../gql/query";
import PurchaseFull from "../components/PurchaseFull";
import ListGroup from "react-bootstrap/ListGroup";
import TodoItems from "../components/TodoItems";

const TodoList = () => {
    const { loading, error, data } = useQuery(GET_PURCHASES);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    console.log(data.queryPurchase)

   function onDoneChange(todo, id) {
       console.log(todo)
       // const [updatePurchase] = useMutation(UPDATE_DONE_PURCHASE);

    }
    return (
        <div className='mx-5 bg-white '>
            <h2>Не обработанные заказы:</h2>
            <div className='text-light bg-dark p-4 row align-items-center text-center mb-1' >
                <div className='col-2'>название товара</div>
                <div className='col-1'>id </div>
                <div className='col-1'>кол-во</div>
                <div className='col-1'>дата</div>
                <div className='col-1'>ФИО</div>
                <div className='col-1'>телефон</div>
                <div className='col-2'>адрес</div>
                <div className='col-2'>примечания</div>
                <div className='col-1'>done</div>

            </div>
            <ListGroup className=''>
                {data.queryPurchase.map(purchase =>
                    <TodoItems key={purchase.id} purchase={purchase} >
                    </TodoItems>
                )}
            </ListGroup>
        </div>
    );
};

export default TodoList;