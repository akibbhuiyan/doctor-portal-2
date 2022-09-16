import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../../../App';

const PrivateRoute = ({ children }) => {

    const [userLoggedIn, setUserLoggedIn] = useContext(UserContext)

    return (userLoggedIn.email ? children : <Navigate to="/login" />)

}

export default PrivateRoute;