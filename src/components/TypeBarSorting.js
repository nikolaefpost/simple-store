import React from 'react';
import {ListGroup} from "react-bootstrap";
import { cartCategoriesVar, TypeIsSelected} from "../store/cache";
import {useReactiveVar} from "@apollo/client";

const TypeBarSorting = () => {
    const cartCategories = useReactiveVar(cartCategoriesVar);
    return (
        <>
            {cartCategories.map(item =>
                <ListGroup.Item style={{cursor: 'pointer'}}
                                active={item.isSelected}
                                onClick={()=> TypeIsSelected(item.name)}
                                key={item.name[0]}>
                    {item.name}
                </ListGroup.Item>
            )}
        </>
    );
};

export default TypeBarSorting;