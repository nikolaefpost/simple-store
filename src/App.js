import React from "react";
import {BrowserRouter} from 'react-router-dom';
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/Loading";
import {useReactiveVar} from "@apollo/client";
import {userIsLogin} from "./store/cache";


function App() {

    const { isLoading } = useAuth0();
    if (isLoading) {
        return <Loading />;
    }

    return (
        <BrowserRouter className='bg-info'>
            {/*<Auth0Provider>*/}
            <NavBar/>
            {/*</Auth0Provider>*/}
            <AppRouter/>

        </BrowserRouter>
    );
}

export default App;
