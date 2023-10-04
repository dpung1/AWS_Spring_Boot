import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authenticate } from '../apis/api/account';
import { useQuery } from 'react-query';
import Loading from '../components/Loading/Loading';

function AuthRoute({ element }) {
    const location = useLocation();
    const pathname = location.pathname;
    const permitAllPath = ["/accounts"];
    
    // useQuery = 무조건 get 요청
    const authenticateState = useQuery(["authenticate"], authenticate, {
        retry: 1,
        refetchOnWindowFocus: false
    });

    // console.log(authenticateState)

    if(authenticateState.isLoading) {
        console.log("로딩중...");
        return <Loading />;
    }

    if(authenticateState.isError) {
        for(let path of permitAllPath) {
            if(pathname.startsWith(path)) {
                return element;
            }
        }
        return <Navigate to={"/accounts/login"}/>;
    }
    
    for(let path of permitAllPath) {
        if(pathname.startsWith(path)) {
            return <Navigate to={"/"}/>
        }
    }

    return element

}

export default AuthRoute;