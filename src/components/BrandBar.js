
import { Row} from "react-bootstrap";
import {useQuery} from "@apollo/client";
import {cartBrandsVar} from "../store/cache";
import  React from "react";
import {GET_BRANDS} from "../gql/query";
import BrandBarSorting from "./BrandBarSorting";
import ListGroup from "react-bootstrap/ListGroup";


const BrandBar = () => {

    const { loading, error, data } = useQuery(GET_BRANDS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    cartBrandsVar(data.queryBrand)

    return (
        <ListGroup horizontal className='flex-wrap' >
            <BrandBarSorting/>
        </ListGroup>
    );
};

export default BrandBar;