import React, {useContext, useEffect, useState,} from 'react'
import axios from 'axios'
import {AuthContext} from "../context/AuthContext";
import { useHistory } from 'react-router-dom';

function Booking() {
    const [posts, setPosts]=useState([])
    const [dates, setDates]=useState([])
    const [filter, setFilterDate]=useState([])
    const { user }  = useContext(AuthContext);
    const history = useHistory()
    const { login } = useContext(AuthContext)




    useEffect(()=>{
        async function getDates() {
            // console.log('user?',user)
            try {
                const userDates = await axios.get("https://localhost:8090/date",
                    {
                        auth:{
                            username: "admin",
                            password: "password"
                        }
                    }
                )
                // console.log('user.username',user.username)
                setDates(userDates.data);  // set State
            } catch (err) {
                console.error(err.message);
            }
        }

        getDates()
    },[])




    function selectDate(selectedDate){
        setFilterDate(selectedDate)
    }

    async function getPosts() {
        try {
            const userPosts = await axios.get("https://localhost:8090/desk",
                {auth:{
                        username: "admin",
                        password: "password"
                    }}
            )

            setPosts(userPosts.data);  // set State
            console.log('posts',setPosts)
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

        axios.put(`https://localhost:8090/desk/${data.id}`,data,                {auth:{
                username: "admin",
                password: "password"
            }})
            .catch((err) => {
                console.log(err);
            })
        getPosts()
        history.push('/Confirmation')
    }

    function AgendaCancel(id) {
        const data = {
            "id": `${id}`,
            "availability":"Available"}

        axios.put(`https://localhost:8090/desk/${data.id}`,data,{auth:{
                username: "admin",
                password: "password"
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
                <h1>First, when would you like to come to the office?</h1>

                <div className='parent'>
                    {dates && dates.map(date=>(
                        <button
                            className='button button1'
                            key={date.id}
                            onClick={()=> selectDate(date.date)}>
                            {date.date}
                        </button>
                    ))}
                </div>
            </div>

            <div className='container'>
                <h1>Pick a desk </h1>
                <h2>{filter}</h2>
                {posts && posts.filter(post => post.date.date === filter).map(post=>(
                    <div key={post.id}>
                        { post.availability === 'Available' ?
                            <button className='button button1' onClick={() => AgendaSubmit(post.id)} >{post.desk}  is available </button>
                            :
                            <button className='button button3'>{post.desk} is unavailable </button>
                        }
                    </div>
                ))}
            </div>
        </>

    );
}

export default Booking;
