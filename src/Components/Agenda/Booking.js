import React, {useContext, useEffect, useState} from 'react'
import axios from 'axios'
import './Booking.css'
import {AuthContext} from "../context/AuthContext";


const Booking=()=> {
    const [posts, setPosts]=useState([])
    const { user }  = useContext( AuthContext );
    async function getPosts() {
        try {
            const userPosts = await axios.get("http://localhost:8090/desk",
                {auth:{
                        username: 'tan',
                        password: 'password'
                    }}
                )
            setPosts(userPosts.data);  // set State
            console.log('USER ON BOOKINGPAGE', user);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(()=>{

        getPosts()
        const interval=setInterval(()=>{
            getPosts()
        },4000)


        return()=>clearInterval(interval)
    },[])


    function AgendaSubmit(id) {
        const data = {
            "id": `${id}`,
            "availability":"Unvailable",
            "username": `${user.username}`,
            "email": `${user.email}`
        }

        axios.put(`http://localhost:8090/desk/${data.id}`,data,                {auth:{
                username: 'admin',
                password: 'password'
            }})
            .then((data) => {

            })
            .catch((err) => {
                console.log(err);
            })
        getPosts()
    }

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
        getPosts()
    }


    return (
        <>
            <div className='container'>
                <h1>Reserve your spot.</h1>

                {posts.map(post=>(
                    <p key={post.id}>{post.id} {post.date.date} {post.desk} {post.availability} booked by {post.username}
                        <button onClick={() => AgendaSubmit(post.id)} >Reserveren</button>
                        <button onClick={() => AgendaCancel(post.id)} >Cancel</button>
                    </p>
                ))}

            </div>

        </>

    );
}

export default Booking