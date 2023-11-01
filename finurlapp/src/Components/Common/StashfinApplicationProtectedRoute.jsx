import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const StashfinApplicationProtectedRoute = ({ children }) => {
    const eligible = useSelector((state) => state.appReducer.NBC.stashfin.eligible);

    if (eligible) {
        return children;
    } else {
        return <Navigate to="/stashfin/dedupe" />;
    }
}

export default StashfinApplicationProtectedRoute;
