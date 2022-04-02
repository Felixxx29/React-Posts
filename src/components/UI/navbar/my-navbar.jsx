import React from 'react';
import {Link} from "react-router-dom";

const MyNavbar = () => {
    return (
        <div className="navbar__links">
            <Link to="/" className="navbar__link">Посты</Link>
            <Link to="/about" className="navbar__link">О нас</Link>
        </div>
    );
};

export default MyNavbar;