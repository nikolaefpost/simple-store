import React from 'react';
import {Card} from "react-bootstrap";
import {BrandIsSelected, cartBrandsVar} from "../store/cache";
import {useReactiveVar} from "@apollo/client";
import ListGroup from "react-bootstrap/ListGroup";

const BrandBarSorting = () => {
    const cartBrands = useReactiveVar(cartBrandsVar);
    console.log(cartBrands)
    return (
        <>
            {cartBrands.map(item =>
                <ListGroup.Item key={item.name} action
                                variant="light"
                                className='p-3 m-1 w-auto border border-light rounded shadow'
                                style={{cursor: 'pointer'}}
                                active={item.isSelected}
                                onClick={() => {
                                    BrandIsSelected(item.name)
                                }}
                >
                    {item.name}
                </ListGroup.Item>
            )}
        </>
    );
};

export default BrandBarSorting;