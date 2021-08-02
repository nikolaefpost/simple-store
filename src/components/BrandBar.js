
import { Row} from "react-bootstrap";
import {useQuery} from "@apollo/client";
import {cartBrandsVar} from "../store/cache";
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