import React, {createContext, useState} from "react";


export const AuthContext = createContext({})


function AuthContextProvider({ children }) {

    const [authState, setAuthState] = useState({
        user: null,
    })

    function loginFunction(userName){
        console.log('LOGIN!',userName)
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