import {useReactiveVar} from "@apollo/client";
import {userIsLogin} from "../store/cache";
import {ListGroup} from "react-bootstrap";
import React from "react";
import Image from "react-bootstrap/Image";
import account_avatar from '../assets/account_avatar.png'

const UserAvatar = () => {


    const user = useReactiveVar(userIsLogin)

    return (
        <>
            <Image className='ml-2' src={account_avatar} roundedCircle />
            <div className='text-white'>{user.name}</div>
        </>
    );
};

export default UserAvatar;