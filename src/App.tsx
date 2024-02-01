import React from 'react'
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import Header from "./components/Header";
import TodoItemPage from "./components/TodoItemPage";
import UserItemPage from "./components/UserItemPage";

function App() {
    return (
        <div>
            <Header/>
            <BrowserRouter>
                <div>
                    <div style={{display: "flex", gap: '10px', alignItems: 'center', fontSize: '30px'}}>
                        <NavLink to="/todos">Список дел</NavLink>
                        <NavLink to="/users">Пользователи</NavLink>
                    </div>
                    <Routes>
                        <Route path="/users" element={<UsersPage/>}/>
                        <Route path={"/todos"} element={<TodosPage/>}/>
                        <Route path={"/users/:id"} element={<UserItemPage />}/>
                        <Route path={"/todo/:id"} element={<TodoItemPage />}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
