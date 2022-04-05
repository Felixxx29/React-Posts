import React, {useContext} from 'react';
import {Routes, Route} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import {AuthContext} from "../context";

const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    return (
        isAuth
            ? <Routes>
                {privateRoutes.map(route =>
                    <Route
                        element={route.element}
                        exact={route.exact}
                        path={route.path}
                        key={route.path}
                    />
                )}
            </Routes>
            : <Routes>
                {publicRoutes.map(route =>
                    <Route
                        element={route.element}
                        exact={route.exact}
                        path={route.path}
                        key={route.path}
                    />
                )}
            </Routes>

    );
};

export default AppRouter;