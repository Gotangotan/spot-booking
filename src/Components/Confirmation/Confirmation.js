import React, {useContext, useEffect, useState} from "react";
import { AuthContext } from "../context/AuthContext";
import { useHistory } from 'react-router-dom';
import axios from "axios";


function Confirmation(){
    const { user }  = useContext( AuthContext );
    const [userConfirmation, setUserConfirmation]=useState([])
    const history = useHistory()

    async function getConfirmation() {
        try{
            const confirmation = await axios.get('https://localhost:8090/desk/', {
                    auth:{
                        username: user.username,
                        password: user.password
                    }
            })
            setUserConfirmation(confirmation.data)
        }
        catch (e) {
            console.error(e)
        }
    }
    useEffect(()=>{
        getConfirmation()
        const interval=setInterval(()=>{
            getConfirmation()
        },1500)
        return()=>clearInterval(interval)
    },[])

    function bookingCancel(id) {
        const data = {
            "id": `${id}`,
            "availability":"Available"}

        axios.put(`https://localhost:8090/desk/${data.id}`,data,{auth:{
                username: user.username,
                password: user.password
            }}
        )

            .catch((err) => {
                console.log(err);
            })
        window.location.reload(false);
    }

    return(
        <>
            <div className='container'>
                <h1>Alright { user && user.username }!</h1>
                <h2>Your booked desk</h2>
                {userConfirmation && userConfirmation.filter(post=>post.username === user.username ).map(post=>(
                    <button className='button button3' onClick={() => bookingCancel(post.id)}  key={post.id}>Cancel {post.desk} {post.date.date} </button>
                ))}
                <p>* Click on the booked item above to cancel that booked spot</p>

            </div>

            <div className='container'>
                <h1>Would you like to book another spot?</h1>
                <button className='button button1' onClick={() => history.push('/Profile')}>Book another spot</button>
            </div>


        </>
    )
}

export default Confirmation;