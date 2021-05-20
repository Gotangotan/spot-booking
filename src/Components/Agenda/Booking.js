import React, {useContext, useEffect, useState} from 'react'
import axios from 'axios'
import './Booking.css'
import {AuthContext} from "../context/AuthContext";

function Booking() {
    const [posts, setPosts]=useState([])
    const [dates, setDates]=useState([])
    const [filter, setFilterDate]=useState([])
    const { user }  = useContext(AuthContext);


    async function getDates() {
        try {
            const userDates = await axios.get("http://localhost:8090/date",
                {auth:{
                        username: 'tan',
                        password: 'password'
                    }}
            )
            setDates(userDates.data);  // set State
        } catch (err) {
            console.error(err.message);
        }
    }

    function selectDate(selectedDate){
        console.log('selectedDate',selectedDate)
        setFilterDate(selectedDate)
        console.log('filterDate',filter)

    }

    async function getPosts() {
        try {
            const userPosts = await axios.get("http://localhost:8090/desk",
                {auth:{
                        username: 'tan',
                        password: 'password'
                    }}
                )
            setPosts(userPosts.data);  // set State
            console.log('posts',setPosts)

        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(()=>{
        getDates()
    },[])

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

                        { post.availability === 'Available' ?   <button className='button button1' onClick={() => AgendaSubmit(post.id)} >{post.desk}  is available </button> : <button className='button button3' onClick={() => AgendaCancel(post.id)} >{post.desk} is unavailable </button>
                        }
                        {/*{ post.availability === 'Unvailable' ? <button onClick={() => AgendaCancel(post.id)} >Cancel</button> : null*/}
                        {/*}*/}

                    </div>
                ))}

            </div>

        </>

    );
}


export default Booking;
