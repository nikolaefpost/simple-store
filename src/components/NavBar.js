import React from 'react';
import { PERSONAL_ROUTE} from "../utils/consts";
import {useHistory} from 'react-router-dom'
import {useQuery, useReactiveVar} from '@apollo/client';
import {authNameVar, isAdminVar, userIsLogin, userVar} from "../store/cache";
import {GET_USER} from "../gql/query";
import NabarView from "./NabarView";


// const useImperativeQuery = (query) => {
//     const { refetch } = useQuery(query, { skip: true });
//     const imperativelyCallQuery = (variables) => {
//         return refetch(variables);
//     };
//     return imperativelyCallQuery;
// };

const NavBar = () => {

    const history = useHistory();
    const authUser = useReactiveVar(authNameVar)
    const isAdmin = useReactiveVar(isAdminVar)
    const goToPersonalPage = ()=> history.push(PERSONAL_ROUTE)

    const { loading, error, data } = useQuery(GET_USER, {
        variables: { user_name: authUser.name, pwd: authUser.pwd }});
    if (loading) return <p>Loading...</p>;
    if (error) console.log(error);

    if (data && data.checkUserPassword){
        console.log(data.checkUserPassword)
        isAdminVar( data.checkUserPassword.role === 'admin' ? true: false)
        localStorage.setItem ("registeredUser", JSON.stringify(data.checkUserPassword));
        localStorage.setItem ("registeredPwd", authUser.pwd);
        userIsLogin({isAuth: true, name: authUser.name, pwd: authUser.pwd})
        userVar(data.checkUserPassword)
    }
    if(data?.checkUserPassword && data.checkUserPassword.user_name === authUser.name) {
        userIsLogin({isAuth: true, name: authUser.name, pwd: authUser.pwd})
    }


    return (
        <NabarView
            isAdmin={isAdmin}
            data={data}
            goToPersonalPage={goToPersonalPage}
        />
    );
};

export default NavBar;