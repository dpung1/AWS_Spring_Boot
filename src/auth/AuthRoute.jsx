import React, { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

function AuthRoute({ elments }) {
    const navigete = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;
    const permitAllPath = ["/accounts"];
    const [ authenticated, setAuthenticated ] = useState(false);

    for(let path of permitAllPath) {
        if(pathname.startsWith(path)) {
            if(authenticated) {
                return <Navigate to={"/"} />
            }
            return elments;
        }
    }

    if(!authenticated) { 
        <Navigate to={"/accounts/login"} />
    }
    return elments;
}

export default AuthRoute;