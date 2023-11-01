import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrefrApplicationProtectedRoute = ({ children }) => {
    const eligible = useSelector((state) => state.appReducer.NBC.prefr.eligible);

    if (eligible) {
        return children;
    } else {
        return <Navigate to="/prefr/dedupe" />;
    }
}

export default PrefrApplicationProtectedRoute;
