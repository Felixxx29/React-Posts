import './styles/app.css';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import MyNavbar from "./components/UI/navbar/my-navbar";

function App() {
    return (
        <BrowserRouter>
            <div className="navbar">
                <MyNavbar/>
            </div>
            <Routes>
                <Route path='/' element={<Posts/>}/>
                <Route path='/about' element={<About/>}/>
                <Route
                    path="*"
                    element={<Posts to="/" replace />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
