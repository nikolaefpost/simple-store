import React from "react";
import {BrowserRouter} from 'react-router-dom';
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {GetBrands, GetCategory, GetProducts} from "./store/cache";


function App() {
    GetProducts();
    GetBrands();
    GetCategory();

    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
