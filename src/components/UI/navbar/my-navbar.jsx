import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import MyButton from "../button/my-button";
import {AuthContext} from "../../../context";

const MyNavbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const navigate = useNavigate()
    const logout = () => {
        setIsAuth(false)
        navigate('/login')
        localStorage.removeItem('auth');
    }
    return (
        <div className="navbar">
            <div className="navbar__container">
                <div className="navbar__links">
                    <Link to="/posts" className="navbar__link">Посты</Link>
                    <Link to="/about" className="navbar__link">О нас</Link>
                </div>
                <MyButton onClick={logout}>
                    Выйти
                </MyButton>
            </div>
        </div>
    );
};

export default MyNavbar;