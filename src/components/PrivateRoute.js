import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';

function PrivateRoute() {
    return localStorage.getItem("login") ? <Outlet/> : <Navigate to="/login"/>;
}

export default PrivateRoute;