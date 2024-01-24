import Card, {CardVariant} from "./components/Card";
import UserList from "./components/UserList";
import {IUser} from "./types/types";
import {useEffect} from "react";
import axios from "axios";
import React from 'react'

function App() {
    const [users, setUsers] = React.useState<IUser[]>([])
    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (e) {

        }
    }
    return (
        <div>
            <Card width={'200px'} height={'200px'} variant={CardVariant.outlined}
                  onClick={(e) => console.log("HELLO SEREGA", e)}
            >
                <button>Кнопка</button>
                <p>ТЕКСТ</p>
            </Card>
            <UserList users={users}/>
        </div>
    )
}

export default App
