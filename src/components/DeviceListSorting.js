import React, {useState} from 'react';
import DeviceItem from "./DeviceItem";
import {useReactiveVar} from "@apollo/client";
import {cartBrandsVar, cartCategoriesVar} from "../store/cache";
import Button from "react-bootstrap/Button";
import {Row} from "react-bootstrap";

const DeviceListSorting = (props) => {

    const [state, setState] = useState(props.queryProduct);
    // const [sort, setSort] = useState('');
    console.log(state)

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
    function handleChange(e) {
        let sortBy = e.target.value;
        let q = [...state]

        if(sortBy==='priceUp') {setState(q.sort(function (a, b) {
            if (a.price > b.price) return 1;
            if (a.price < b.price) return -1;
            return 0;
        }))}
        else if(sortBy==='priceDoun') {setState(q.sort(function (a, b) {
            if (a.price < b.price) return 1;
            if (a.price > b.price) return -1;
            return 0;
        }))}
        else {setState(props.queryProduct)}

        // setState( state.sort());
    }

    let list=[];
    if(nameBrands.length>0&&!nameTypes.length>0) list = selectedDevice.flat();
    else if(nameTypes.length>0) list = selectedDeviceFull.flat();
    else list = state;
    return (

        <>
            <form className='d-flex justify-content-end'>
                <select className='p-2' variant="dark" onChange={handleChange}>
                    <option value="priceUp">от дешевых к дорогим</option>
                    <option value="priceDoun">от дорогих к дешевым</option>
                    <option selected value="default">по релевантности</option>
                </select>
            </form>

            <Row className='d-flex'>
            {list.map(device=>
                <DeviceItem key={device.id} device={device}/>

            )}
            </Row>
        </>
    );
};

export default DeviceListSorting;