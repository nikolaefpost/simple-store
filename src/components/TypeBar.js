import React from 'react';
import {ListGroup} from "react-bootstrap";
import {makeVar, useReactiveVar} from "@apollo/client";
import {cartCategoriesVar, TypeIsSelected} from "../store/cache";
export const selectedType = makeVar({isSelect: false});

const TypeBar = () => {

    const cartCategories = useReactiveVar(cartCategoriesVar);

    return (
        <ListGroup>
            {cartCategories.map(item =>
            <ListGroup.Item style={{cursor: 'pointer'}}
                active={item.isSelected}
                onClick={()=> TypeIsSelected({...item, isSelected: !item.isSelected})}
                key={item.name[0]}>
                {item.name}
            </ListGroup.Item>
            )}
        </ListGroup>
    );
};

export default TypeBar;