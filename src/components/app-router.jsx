import React from 'react';
import {Routes,Route} from "react-router-dom";
import {routes} from "../router";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route =>
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