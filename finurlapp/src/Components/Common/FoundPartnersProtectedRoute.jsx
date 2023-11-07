import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const FoundPartnersProtectedRoute = ({ children }) => {
    const found = useSelector((state) => state.appReducer.found_partners);

    if (found) {
        return children;
    } else {
        return <Navigate to="/get-started" />;
    }
}

export default FoundPartnersProtectedRoute;
