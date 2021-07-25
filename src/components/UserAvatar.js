import {useQuery, useReactiveVar} from "@apollo/client";
import {isAdminVar, userIsLogin} from "../store/cache";

import React from "react";
import Image from "react-bootstrap/Image";
import account_avatar from '../assets/account_avatar.png'
import garry  from '../assets/garry.jpg'
import {GET_USER} from "../gql/query";
// import { useAuth0 } from "@auth0/auth0-react";

// const useImperativeQuery = (query) => {
//     const { refetch } = useQuery(query, { skip: true });
//     const imperativelyCallQuery = (variables) => {
//         return refetch(variables);
//     };
//     return imperativelyCallQuery;
// };

const UserAvatar = () => {
    const user = useReactiveVar(userIsLogin)
    // const isAdmin = useReactiveVar(isAdminVar)
    console.log(user.name)

    const { loading, error, data } = useQuery(GET_USER, {
        variables: { "user_name": user.name }});
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    console.log(data)
    isAdminVar( data.getUser.role==='admin' ? true: false)
    localStorage.setItem ("registeredUser", JSON.stringify(data.getUser));
    console.log(JSON.parse (localStorage.getItem ("registeredUser")))


    return (
        <>
            <Image className='ml-2 mr-2'  height={36}
                   src={data.getUser.image? data.getUser.image+'.jpg' : account_avatar}  roundedCircle />
            <div className='text-white'>{data.getUser.user_name}</div>
        </>
    );
};

export default UserAvatar;