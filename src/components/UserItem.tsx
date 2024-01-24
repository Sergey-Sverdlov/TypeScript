import React from 'react';
import {IUser} from "../types/types";

interface UserItemProps {
    user: IUser
}

const UserItem: FC<UserItemProps> = ({user}) => {
    return (
        <div style={{padding: 15, border: '1px solid black'}}>
            {user.id}. {user.name} Проживает в городе &nbsp;
            {user.address.city} на улице {user.address.street}
        </div>
    );
};

export default UserItem
