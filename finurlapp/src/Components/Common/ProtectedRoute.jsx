import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const user = useSelector((state) => state.authReducer.loggedInUser.name);

    if (user) {
        return children;
    } else {
        return <Navigate to="/authentication" />;
    }
}

export default ProtectedRoute;
