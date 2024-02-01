import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import Header from "./components/Header";

function App() {
    return (
        <div>
        <Header />
        <BrowserRouter>
            <Routes>
                <Route path="/users" element={<UsersPage />}/>
                <Route path={"/todos"} element={<TodosPage />}/>
            </Routes>
        </BrowserRouter>
        </div>
    )
}

export default App
