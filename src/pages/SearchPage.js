import React from 'react';
import {useQuery, useReactiveVar} from "@apollo/client";
import {SearchListVar} from "../store/cache";
import {GET_PRODUCTS_SEARCH} from "../gql/query";
import DeviceListSorting from "../components/DeviceListSorting";
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import Footer from "../components/Footer";

const SearchPage = () => {
    let SearchList = useReactiveVar(SearchListVar)
    const { loading, error, data } = useQuery(GET_PRODUCTS_SEARCH, {
        variables: {filter: { name: { regexp: "/.*"+SearchList+".*/i" } }}});
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    return (
        <>
            <Container style={{marginBottom:250, marginTop: 70}}>
                <Row className='mt-2'>
                    <Col md={3}>
                        <TypeBar/>
                    </Col>
                    <Col md={9}>
                        <BrandBar/>
                        <h3>Товары по запросу: {SearchList}</h3>
                        <DeviceListSorting queryProduct={data.queryProduct}/>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>

    );
};

export default SearchPage;