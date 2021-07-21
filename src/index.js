import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

import {BrowserRouter as Router} from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";


export const client = new ApolloClient({
    uri: 'https://floral-voice.eu-central-1.aws.cloud.dgraph.io/graphql',
    cache: new InMemoryCache()
});


ReactDOM.render(
    <ApolloProvider client={client}>
    <Router>
        <Auth0ProviderWithHistory>

                <App/>

        </Auth0ProviderWithHistory>
    </Router>
    </ApolloProvider>,
    document.getElementById('root')
);

// export const Context = createContext(null)
//
// ReactDOM.render(
//     <Context.Provider value={{
//         user: new UserStore(),
//         device: new DeviceStore()
//     }}>
//         <App />
//     </Context.Provider>,
//   document.getElementById('root')
// );

