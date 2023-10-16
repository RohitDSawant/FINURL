import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectResetRoute = ({children}) => {
    const user = useSelector((state) => state.authReducer.reset_password);

    if (user) {
        return children;
    } else {
        return <Navigate to="/authentication" />;
    }
}

export default ProtectResetRoute