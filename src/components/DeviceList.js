
import {Row} from "react-bootstrap";
import DeviceItem from "./DeviceItem";
import {useReactiveVar} from "@apollo/client";
import {cartBrandsVar, cartCategoriesVar, cartItemsVar} from "../store/cache";

const DeviceList =  () => {
    const cartItems = useReactiveVar(cartItemsVar);

    const selectedBrands = useReactiveVar(cartBrandsVar).filter(brand=>brand.isSelected)
    const nameBrands = [];
    selectedBrands.map(item=>nameBrands.push(item.name));
    let selectedDevice = [];
    for (let i = 0; i < nameBrands.length; i++) {
        selectedDevice.push(cartItems.filter(item=>item.brand.name === nameBrands[i]))
    }

    const selectedTypes = useReactiveVar(cartCategoriesVar).filter(type=>type.isSelected);
    const nameTypes = [];
    selectedTypes.map(item=>nameTypes.push(item.name));
    let selectedDeviceFull = [];
    for (let i = 0; i < nameTypes.length; i++) {
        console.log(selectedDevice.flat())
        selectedDeviceFull.push(selectedDevice.flat().length>0
            ? selectedDevice.flat().filter(item=>item.category[0].name === nameTypes[i])
            : cartItems.filter(item=>item.category[0].name === nameTypes[i]))
    }

    let list=[];
    if(nameBrands.length>0&&!nameTypes.length>0) list = selectedDevice.flat();
    else if(nameTypes.length>0) list = selectedDeviceFull.flat();
    else list = cartItems;

    return (
        <Row className='d-flex'>
            {list.map(device=>
                <DeviceItem key={device.id} device={device}/>

            )}
        </Row>
    );
};

export default DeviceList;

// const selectedBrands = useReactiveVar(cartBrandsVar).filter(brand=>brand.isSelected).map(item=>item.name)
// const nameBrands = [];
// selectedBrands.map(item=>nameBrands.push(item.name));
// let selectedDevice = cartItems.filter(item=>selectedBrands.includes(item.brand.name));
// for (let i = 0; i < nameBrands.length; i++) {
//     selectedDevice.push(cartItems.filter(item=>item.brand.name === nameBrands[i]))
// }