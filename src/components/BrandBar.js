import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, ListGroup, Row} from "react-bootstrap";

const BrandBar = observer( () => {
    const {device} = useContext(Context)

    return (
        <Row className='d-flex'>
            {device.brands.map(brand=>
                <Card key={brand.id} className='p-3'
                      style={{cursor: 'pointer'}}
                      border={brand.id ===device.selectedBrand.id ? 'primary' : 'light' }
                      onClick={()=> device.setSelectedBrand(brand)}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;