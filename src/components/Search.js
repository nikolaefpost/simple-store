import React from 'react';
import {Form, FormControl} from "react-bootstrap";
import Button from "react-bootstrap/Button";

import { SearchListVar} from "../store/cache";
import {SEARCH_ROUTE} from "../utils/consts";
import {useHistory} from "react-router-dom";

const Search = () => {
 let input_search;
    const history = useHistory();

    return (
        <Form className="d-flex"
              onSubmit={e => {
                  e.preventDefault();
                  console.log(input_search.value)
                  SearchListVar(input_search.value)
                  history.push(SEARCH_ROUTE)
                  input_search.value=''
              }}>
            <FormControl
                type="search"
                placeholder="найдется все!"
                className="ml-5"
                aria-label="Search"
                ref={node => {input_search = node;}}
            />
            <Button variant="outline-light" className="ml-2" type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </Button>
        </Form>
    );
};

export default Search;