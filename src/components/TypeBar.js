import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";
import {makeVar, useReactiveVar} from "@apollo/client";
import {cartItemsVar} from "../store/cache";
export const selectedType = makeVar({isSelect: false});

const TypeBar = observer( () => {
    // const {device} = useContext(Context)
    const cartItems = useReactiveVar(cartItemsVar);
    return (
        <ListGroup>
            {cartItems.map(item =>
            <ListGroup.Item style={{cursor: 'pointer'}}
                active={selectedType.isSelect}
                onClick={()=> selectedType({isSelect: true})}
                key={item.id}>
                {item.category}
            </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;