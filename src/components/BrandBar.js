import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, ListGroup, Row} from "react-bootstrap";
import {makeVar, useReactiveVar} from "@apollo/client";
import {cartItemsVar} from "../store/cache";
export const selectedBrand = makeVar({isSelect: false});

const BrandBar = observer( () => {
    // const {device} = useContext(Context)
    const cartItems = useReactiveVar(cartItemsVar);
    const ii = useReactiveVar(selectedBrand);
    console.log(ii)

    return (
        <Row className='d-flex'>
            {cartItems.map(item=>
                <Card key={item.id} className='p-3'
                      style={{cursor: 'pointer'}}
                      border={ii.isSelect ? 'primary' : 'light' }
                      onClick={()=> selectedBrand({isSelect: true})}
                >
                    {item.brand}
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;