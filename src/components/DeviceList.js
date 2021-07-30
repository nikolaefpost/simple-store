
import {Row} from "react-bootstrap";
import DeviceItem from "./DeviceItem";
import {useQuery, useReactiveVar} from "@apollo/client";
import {cartBrandsVar, cartCategoriesVar, cartItemsVar} from "../store/cache";
import {GET_PRODUCTS} from "../gql/query";
import React, {useState} from "react";
import DeviceListSorting from "./DeviceListSorting";

const DeviceList =  () => {

    const { loading, error, data } = useQuery(GET_PRODUCTS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    cartItemsVar(data.queryProduct)

    // const cartItems = useReactiveVar(cartItemsVar);

    // const selectedBrands = useReactiveVar(cartBrandsVar).filter(brand=>brand.isSelected)
    // const nameBrands = [];
    // selectedBrands.map(item=>nameBrands.push(item.name));
    // let selectedDevice = [];
    // for (let i = 0; i < nameBrands.length; i++) {
    //     selectedDevice.push(cartItems.filter(item=>item.brand.name === nameBrands[i]))
    // }
    //
    // const selectedTypes = useReactiveVar(cartCategoriesVar).filter(type=>type.isSelected);
    // const nameTypes = [];
    // selectedTypes.map(item=>nameTypes.push(item.name));
    // let selectedDeviceFull = [];
    // for (let i = 0; i < nameTypes.length; i++) {
    //     selectedDeviceFull.push(selectedDevice.flat().length>0
    //         ? selectedDevice.flat().filter(item=>item.category[0].name === nameTypes[i])
    //         : cartItems.filter(item=>item.category[0].name === nameTypes[i]))
    // }
    //
    // let list=[];
    // if(nameBrands.length>0&&!nameTypes.length>0) list = selectedDevice.flat();
    // else if(nameTypes.length>0) list = selectedDeviceFull.flat();
    // else list = cartItems;

    return (
        <Row className='d-flex'>
            <DeviceListSorting queryProduct={data.queryProduct}/>
        </Row>
    );
};

export default DeviceList;

