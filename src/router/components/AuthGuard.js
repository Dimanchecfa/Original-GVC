import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthGuard = ( { children }) => {
   let auth = true;
    if (auth) {
        return children;
    }
   window.location.href = '/';
};

export default AuthGuard;