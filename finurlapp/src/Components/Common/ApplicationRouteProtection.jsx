import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ApplicationProtectedRoute = ({ children }) => {
    const eligible = useSelector((state) => state.appReducer.eligible);

    if (eligible) {
        return children;
    } else {
        return <Navigate to="/stashfin/dedupe" />;
    }
}

export default ApplicationProtectedRoute;
