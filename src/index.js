import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import  DeviceStore from "./store/DeviceStore";

import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
export const client = new ApolloClient({
    uri: 'https://small-night.us-east-1.aws.cloud.dgraph.io/graphql',
    cache: new InMemoryCache()
});


ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
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

