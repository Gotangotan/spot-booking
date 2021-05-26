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

    async function fetchUserData(userName){
        try{
            const result = await axios.get(`http://localhost:8090/users/${userName}`, {
            });
            setAuthState({
                user:{
                    username:result.data.username,
                    email:result.data.email,
                },
                status: 'done'
            })
            // console.log('setAuthState?',setAuthState)
        }
        catch (e) {
            console.error(e)
        }
    }


    // wanneer de applicatie geladen wordt willen we checken of er een user is
    useEffect(()=>{
        // is er een user?
        const user = localStorage.getItem('user');
        if (user !== undefined){
            // console.log('er is een user')
        }
        // haal dan de data op
        fetchUserData(user)

        // zo nee, dan geen user, maar wel status op done
        setAuthState({
            user: null,
            status: 'done',
        });
    },[]);

    async function loginFunction(userName){
        localStorage.setItem('user',userName);
        fetchUserData(userName);
    }

    function logoutFunction(){
        // localstorage leeghalen
        localStorage.clear()
        history.push('/')
        // user in de context weer op null zetten
    }

    const data = {
        ...authState,
        login: loginFunction,
        logout: logoutFunction,
    }

    return (
        <AuthContext.Provider value={data}>
            { authState.status === 'done' ? children : <p>...Loading</p>
            }
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;