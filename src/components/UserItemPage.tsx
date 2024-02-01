import React, {FC, useEffect} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import {useParams, useNavigate} from "react-router-dom";

interface UserItemPageParams {
    id: string
}

const UserItemPage: FC = () => {
    const navigate = useNavigate();
    const [user, setUser] = React.useState<IUser | null>(null)
    const params = useParams<UserItemPageParams>()
    const id = params.id
    useEffect(() => {
        fetchUser()
    }, [])

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`)
            setUser(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <button onClick={()=>{
                navigate('/users')
            }}>Назад</button>
            <h1>Страница пользователя {user?.id}. {user?.name}</h1>
            <div>
                Электронная почта: {user?.email}
                Адрес:
            </div>
        </div>
    );
};

export default UserItemPage;
