
import {Row} from "react-bootstrap";
import {useQuery} from "@apollo/client";
import { cartItemsVar} from "../store/cache";
import { GET_PRODUCTS_SEARCH} from "../gql/query";
import React from "react";
import DeviceListSorting from "./DeviceListSorting";
import Button from "react-bootstrap/Button";

const DeviceList =  () => {
    const { loading, error, data } = useQuery(GET_PRODUCTS_SEARCH);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    cartItemsVar(data.queryProduct)
    function onChange() {

    }

    return (
        <>
            <DeviceListSorting queryProduct={data.queryProduct}/>
        </>
    );
};

export default DeviceList;

