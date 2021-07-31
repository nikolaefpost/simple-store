
import {Row} from "react-bootstrap";
import {useQuery} from "@apollo/client";
import { cartItemsVar, SearchListVar} from "../store/cache";
import { GET_PRODUCTS_SEARCH} from "../gql/query";
import React from "react";
import DeviceListSorting from "./DeviceListSorting";

const DeviceList =  () => {

    const { loading, error, data } = useQuery(GET_PRODUCTS_SEARCH);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    cartItemsVar(data.queryProduct)

    return (
        <Row className='d-flex'>
            <DeviceListSorting queryProduct={data.queryProduct}/>
        </Row>
    );
};

export default DeviceList;

