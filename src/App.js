import React from "react";
import {BrowserRouter} from 'react-router-dom';
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/Loading";
import {useReactiveVar} from "@apollo/client";
import {userIsLogin} from "./store/cache";
import ErrorBoundary from "./components/ErrorBoundary";
import NabarView from "./components/NabarView";


function App() {

    const { isLoading } = useAuth0();
    if (isLoading) {
        return <Loading />;
    }

    return (
        <BrowserRouter className='bg-info'>
            {/*<Auth0Provider>*/}
            <ErrorBoundary>
                <NavBar/>
                {/*</Auth0Provider>*/}
                <AppRouter/>
            </ErrorBoundary>


        </BrowserRouter>
    );
}

export default App;
