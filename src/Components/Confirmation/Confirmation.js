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
            const confirmation = await axios.get('http://localhost:8090/desk/', {

            });
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
        },2000)
        return()=>clearInterval(interval)
    },[])

    function AgendaCancel(id) {
        const data = {
            "id": `${id}`,
            "availability":"Available"}

        axios.put(`http://localhost:8090/desk/${data.id}`,data,{auth:{
                username: 'admin',
                password: 'password'
            }}

        )
            .then((data) => {
            })
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
                    <button className='button button3' onClick={() => AgendaCancel(post.id)}  key={post.id}>Cancel {post.desk} {post.date.date} </button>
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