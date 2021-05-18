import React, {createContext, useState} from "react";
import {useHistory} from "react-router-dom";


export const AuthContext = createContext({})


function AuthContextProvider({ children }) {
    const history = useHistory()
    const [authState, setAuthState] = useState({
        user: null,
    })

    function loginFunction(userName){
        console.log('LOGIN!',userName);
        localStorage.setItem('user',userName);
    }

    function logoutFunction(){
        console.log('LOGOUT!')
    }

    const data = {
        ...authState,
        login: loginFunction,
        logout: logoutFunction,
    }

    return (
        <AuthContext.Provider value={data}>
            { children }
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;