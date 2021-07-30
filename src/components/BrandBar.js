
import {Card,  Row} from "react-bootstrap";
import {useQuery, useReactiveVar} from "@apollo/client";
import {cartBrandsVar, BrandIsSelected} from "../store/cache";
import  React from "react";
import {GET_BRANDS} from "../gql/query";
import BrandBarSorting from "./BrandBarSorting";


const BrandBar = () => {

    const { loading, error, data } = useQuery(GET_BRANDS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    cartBrandsVar(data.queryBrand)

    return (
        <Row className='d-flex'>
            <BrandBarSorting/>
        </Row>
    );
};

export default BrandBar;