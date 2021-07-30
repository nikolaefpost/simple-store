import React, {useState} from 'react';
import DeviceItem from "./DeviceItem";
import {useReactiveVar} from "@apollo/client";
import {cartBrandsVar, cartCategoriesVar} from "../store/cache";

const DeviceListSorting = (props) => {

    const [state, setState] = useState(props.queryProduct);
    console.log(state)

    // const cartItems = useReactiveVar(cartItemsVar);

    const selectedBrands = useReactiveVar(cartBrandsVar).filter(brand=>brand.isSelected)
    const nameBrands = [];
    selectedBrands.map(item=>nameBrands.push(item.name));
    let selectedDevice = [];
    for (let i = 0; i < nameBrands.length; i++) {
        selectedDevice.push(state.filter(item=>item.brand.name === nameBrands[i]))
    }

    const selectedTypes = useReactiveVar(cartCategoriesVar).filter(type=>type.isSelected);
    const nameTypes = [];
    selectedTypes.map(item=>nameTypes.push(item.name));
    let selectedDeviceFull = [];
    for (let i = 0; i < nameTypes.length; i++) {
        selectedDeviceFull.push(selectedDevice.flat().length>0
            ? selectedDevice.flat().filter(item=>item.category[0].name === nameTypes[i])
            : state.filter(item=>item.category[0].name === nameTypes[i]))
    }

    let list=[];
    if(nameBrands.length>0&&!nameTypes.length>0) list = selectedDevice.flat();
    else if(nameTypes.length>0) list = selectedDeviceFull.flat();
    else list = state;
    return (
        <>
            {list.map(device=>
                <DeviceItem key={device.id} device={device}/>

            )}
        </>
    );
};

export default DeviceListSorting;