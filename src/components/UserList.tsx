import React, {FC} from 'react';
import {IUser} from "../types/types";

interface UserListProps {
    users: IUser[]
}
const UserList: FC<UserListProps> = ({users}) => {
    console.log(users)
    return (
        <div>
            {users.map(user =>
                <div key={user.id} style={{padding: 15, border: '1px solid black'}}>
                    {user.id}. {user.name} Проживает в городе &nbsp;
                    {user.address.city} на улице {user.address.street}
                </div>
            )}
        </div>
    );
}
export default UserList
