
import {Card, ListGroup, Row} from "react-bootstrap";
import {makeVar, useReactiveVar} from "@apollo/client";
import {cartBrandsVar, BrandIsSelected} from "../store/cache";
import  React from "react";
export const selectedBrand = makeVar({isSelect: false});

const BrandBar = () => {

    const cartBrands = useReactiveVar(cartBrandsVar);
    console.log(cartBrands)

    return (
        <Row className='d-flex'>
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
        </Row>
    );
};

export default BrandBar;