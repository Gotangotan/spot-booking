import React, {useContext, useEffect, useState} from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

function Confirmation(){
    const { user }  = useContext( AuthContext );
    const [userConfirmation, setUserConfirmation]=useState([])

    async function getConfirmation() {
        try{
            const confirmation = await axios.get('http://localhost:8090/desk/', {

            });

            console.log('confirmation',confirmation.data)
            setUserConfirmation(confirmation.data)
            console.log('userConfirmation',userConfirmation)

        }
        catch (e) {
            console.error(e)
        }
    }
    useEffect(()=>{
        getConfirmation()
    },[])


    return(
        <>
            <div className='container'>
                <h1>Alright { user && user.username }!</h1>
                <h2>Your booked desk</h2>
                {userConfirmation && userConfirmation.filter(post=>post.username === user.username ).map(post=>(
                    <p key={post.id}>{post.desk}{post.username} </p>
                ))}

            </div>
        </>
    )
}

export default Confirmation;