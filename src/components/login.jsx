import React, {useContext} from 'react';
import MyInput from "./UI/input/my-input";
import MyButton from "./UI/button/my-button";
import {AuthContext} from "../context";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const navigate = useNavigate();
    const login = event => {
        event.preventDefault();
        setIsAuth(true)
        navigate('/posts')
        localStorage.setItem('auth', 'true')
    }
    return (
        <div>
            <h1>Страница логина</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Введите логин"/>
                <MyInput type="password" placeholder="Введите пароль"/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;