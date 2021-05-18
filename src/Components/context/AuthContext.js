import React, {createContext, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";


export const AuthContext = createContext({})


function AuthContextProvider({ children }) {
    const history = useHistory()
    const [authState, setAuthState] = useState({
        user: null,
        status: 'pending',
    });

    useEffect(()=>{
        setAuthState({
            user: null,
            status: 'done',
        });
    },[]);

    async function loginFunction(userName){
        console.log('LOGIN!',userName);
        localStorage.setItem('user',userName);


        try{
            const result = await axios.get(`http://localhost:8090/users/${userName}`, {
            });
            console.log('result?',result)
            setAuthState({
            user:{
                username:result.data.username,
                email:result.data.email,
                },
            status: 'done'
            })
            console.log('setAuthState?',setAuthState)
        }
        catch (e) {
            console.error(e)
        }



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
            { authState.status === 'done' ? children : <p>fout</p>
            }
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;