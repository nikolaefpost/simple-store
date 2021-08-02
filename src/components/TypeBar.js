import React from 'react';
import {ListGroup} from "react-bootstrap";
import { useQuery} from "@apollo/client";
import { cartCategoriesVar} from "../store/cache";
import {GET_CATEGORY} from "../gql/query";
import TypeBarSorting from "./TypeBarSorting";


const TypeBar = () => {

    const { loading, error, data } = useQuery(GET_CATEGORY);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    cartCategoriesVar(data.queryCategory)

    return (
        <ListGroup>
            <TypeBarSorting />
        </ListGroup>
    );
};

export default TypeBar;