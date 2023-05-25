import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'flowbite-react';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if (loading){
        return <div className='text-center p-10 my-4'><Spinner aria-label="Default status example" size="xl" /></div>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;