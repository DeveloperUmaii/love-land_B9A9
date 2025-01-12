import React, { useContext } from 'react';
import { AuthContext } from '../FirebaseProvider/FirebaseProvider';

const useeAuth = () => {
    const all =useContext(AuthContext)
    //console.log(all);
    return all
};

export default useeAuth;