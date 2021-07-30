import React from 'react';
import {ListGroup} from "react-bootstrap";
import {makeVar, useQuery, useReactiveVar} from "@apollo/client";
import {cartBrandsVar, cartCategoriesVar, TypeIsSelected} from "../store/cache";
import {GET_CATEGORY} from "../gql/query";
import TypeBarSortyng from "./TypeBarSortyng";
export const selectedType = makeVar({isSelect: false});

const TypeBar = () => {

    const { loading, error, data } = useQuery(GET_CATEGORY);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    cartCategoriesVar(data.queryCategory)



    return (
        <ListGroup>
            <TypeBarSortyng />
        </ListGroup>
    );
};

export default TypeBar;