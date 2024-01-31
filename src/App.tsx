import Card, {CardVariant} from "./components/Card";
import UserList from "./components/UserList";
import {ITodo, IUser} from "./types/types";
import {useEffect} from "react";
import axios from "axios";
import React from 'react'
import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";
import EventsExample from "./components/EventsExample";

function App() {
    const [users, setUsers] = React.useState<IUser[]>([])
    const [todos, setTodos] = React.useState<ITodo[]>([])
    useEffect(() => {
        fetchUsers()
        fetchTodos()
    }, [])

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    }

    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(response.data)
        } catch (e) {
            alert(e)
        }
    }


    return (
        <div>
            <EventsExample />
            <Card width={'200px'} height={'200px'} variant={CardVariant.outlined}
                  onClick={(e) => console.log("HELLO SEREGA", e)}
            >
                <button>Кнопка</button>
                <p>ТЕКСТ</p>
            </Card>
            <List
                items={users}
                renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>}
            />
            <List
                items={todos}
                renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}
            />
        </div>
    )
}

export default App
