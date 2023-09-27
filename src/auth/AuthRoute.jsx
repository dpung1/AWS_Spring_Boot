import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { authenticate } from '../apis/api/account';

function AuthRoute({ element }) {
    const navigete = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;
    const permitAllPath = ["/accounts"];
    const [ authenticated, setAuthenticated ] = useState(false);

    useEffect( () => {
        authenticate()
        .then(response => {
            setAuthenticated(response.data);
            for(let path of permitAllPath) {
                if(pathname.startsWith(path)) {
                    if(authenticated) {
                        navigete("/")
                    }
                }
            }
        })
        .catch(error => {
            alert(error.response.data)
            setAuthenticated(false);
            if(!authenticated) { 
                navigete("/accounts/login")
            }
        });
    }, [authenticated]);
    
    return element;
}

export default AuthRoute;