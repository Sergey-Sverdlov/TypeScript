import React from 'react';
import {IUser} from "../types/types";
import {useNavigate} from "react-router-dom";
interface UserItemProps {
    user: IUser;
}
const UserItem: FC<UserItemProps> = ({user}) => {
    const navigate = useNavigate()
    return (
        <div onClick={()=>navigate(`/users/${user.id}`)} style={{padding: 15, border: '1px solid black'}}>
            {user.id}. {user.name} Проживает в городе &nbsp;
            {user.address.city} на улице {user.address.street}
        </div>
    );
};

export default UserItem
