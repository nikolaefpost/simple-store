import React from 'react';
import {Card, Row} from "react-bootstrap";
import {BrandIsSelected, cartBrandsVar, cartCategoriesVar} from "../store/cache";
import {useReactiveVar} from "@apollo/client";

const BrandBarSorting = () => {
    const cartBrands = useReactiveVar(cartBrandsVar);
    return (
        <>
            {cartBrands.map(item=>
                <Card key={item.name} className='p-3'
                      style={{cursor: 'pointer'}}
                      border={item.isSelected ? 'primary' : 'light' }
                      onClick={()=> {
                          BrandIsSelected({...item, isSelected: !item.isSelected})
                      }}
                >
                    {item.name}
                </Card>
            )}
        </>
    );
};

export default BrandBarSorting;