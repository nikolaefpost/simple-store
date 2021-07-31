

import React from "react";
import Image from "react-bootstrap/Image";
import account_avatar from '../assets/account_avatar.png'



// import { useAuth0 } from "@auth0/auth0-react";

// const useImperativeQuery = (query) => {
//     const { refetch } = useQuery(query, { skip: true });
//     const imperativelyCallQuery = (variables) => {
//         return refetch(variables);
//     };
//     return imperativelyCallQuery;

const UserAvatar = (props) => {

    return (
        <>
            <Image className='ml-2 mr-2'  height={36} style={{cursor: 'pointer'}}
                   src={props.user && props.user.image? props.user.image+'.jpg' : account_avatar}  roundedCircle
                   onClick={props.onClick}/>
            <div className='text-white'>{props.user && props.user.image? props.user.user_name: ''}</div>
        </>
    );
};

export default UserAvatar;