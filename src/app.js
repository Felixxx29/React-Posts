import './styles/app.css';
import React from "react";
import {BrowserRouter} from "react-router-dom";
import MyNavbar from "./components/UI/navbar/my-navbar";
import AppRouter from "./components/app-router";

function App() {
    return (
        <BrowserRouter>
            <div className="navbar">
                <MyNavbar/>
            </div>
            <AppRouter/>
        </BrowserRouter>
    )
}

export default App;
