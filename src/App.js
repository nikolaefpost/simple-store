import React from "react";
import {BrowserRouter} from 'react-router-dom';
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";

import { useQuery} from '@apollo/client';
import {GET_FIRST_FIVE_USERS} from "./gql/query";
import {cartItemsVar} from "./store/cache";




function App() {
    const { loading, error, data } = useQuery(GET_FIRST_FIVE_USERS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    cartItemsVar(data.queryProduct)
    console.log(data.queryProduct)

  return (
    <BrowserRouter>
        <NavBar/>
        <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
