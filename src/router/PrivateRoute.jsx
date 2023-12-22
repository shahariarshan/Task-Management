/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from '../hooks/useAuth'


export const PrivateRoute = ({children}) => {
    const {user,loading} = useAuth()
    const location =useLocation()
    if(loading){
        return <progress className="progress w-56 text-5xl mx-auto lg:mt-36"></progress>
    }
    if(user){
        return children;
    }

    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;