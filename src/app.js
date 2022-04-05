import './styles/app.css';
import React, {useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import MyNavbar from "./components/UI/navbar/my-navbar";
import AppRouter from "./components/app-router";
import {AuthContext} from "./context";

function App() {
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
    }, [])
    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <BrowserRouter>
                <MyNavbar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App;
