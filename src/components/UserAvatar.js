
import React from "react";
import Image from "react-bootstrap/Image";
import account_avatar from '../assets/account_avatar.png'


const UserAvatar = ({user, onClick}) => {

    return (
        <>
            <Image className='ml-2 mr-2'  height={36} style={{cursor: 'pointer'}}
                   src={user && user.image? user.image+'.jpg' : account_avatar}  roundedCircle
                   onClick={onClick}/>
            <div className='text-white'>{user? user.user_name: ''}</div>
        </>
    );
};

export default UserAvatar;