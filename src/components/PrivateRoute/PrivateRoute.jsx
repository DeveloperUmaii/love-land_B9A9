import React from 'react';
import useeAuth from '../../hoook/useeAuth';
import { Navigate, useLocation } from 'react-router-dom';
//npm run dev
const PrivateRoute = ({children}) => {
    const {user} = useeAuth();
    const location = useLocation();
    //console.log(location);
    if (!user) {
        return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>  //state ba location a login hole autu jacche na
    }                                                                        //r logout deoar por abr reload dile auto login hoiye jacche 
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;