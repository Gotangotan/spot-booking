import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {AuthContext} from "../context/AuthContext";

function Admin(){
    const [ allDates,setDates ] = useState([])
    const [ allDesks,setDesks ] = useState([])
    const [filter, setFilterDate]=useState([])
    const { user }  = useContext( AuthContext );

    function selectDate(selectedDate){
        setFilterDate(selectedDate)
    }

    useEffect(() => {
        async function getDates(){
            try{
                const response = await axios.get('https://localhost:8090/date/',{
                    auth:{
                        username: 'admin',
                        password: 'password'
                    }
                })
                setDates(response.data)
            }
            catch (e) {
                console.error(e.message)
            }
        }
        getDates()
    },[])

    useEffect(() => {
        async function getDesks(){
            try{
                const results = await axios.get('https://localhost:8090/desk/',{
                    auth: {
                        username : "admin",
                        password : "password"
                    }
                })
                console.log('results.data',results.data)
                setDesks(results.data)
            }
            catch (e) {
                console.error(e.message)
            }
        }
        getDesks()
    },[])

    function bookingCancel(id) {
        const data = {
            "id": `${id}`,
            "availability":"Available"}

        axios.put(`http://localhost:8090/desk/${data.id}`,data,{auth:{
                username: 'admin',
                password: 'password'
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
                <h1>Hi Admin,</h1>
            </div>
            <div className='container'>
                <h1>Booking dates</h1>
                    {allDates && allDates.map(date=>(
                        <button
                            key={date.id}
                            className='button button1'
                            onClick={()=> selectDate(date.date)}>
                            {date.date}
                        </button>))}
            </div>
            <div className='container'>
                <h2>Desks for {filter} </h2>


                {allDesks && allDesks.filter(post => post.date.date === filter).map(desk=>(
                    <div key={desk.id}>
                        {desk.availability === 'Available' ?
                            <button className='button button1'>{desk.desk} is Unbooked </button>
                            :
                            <button className='button button3' onClick={() => bookingCancel(desk.id)} >{desk.desk} is booked by {desk.username}</button>

                        }
                        {desk.availability === 'Available' ? null :
                            <p>* Click on the booked item above to cancel that booked spot</p>
                        }
                    </div>
                ))}
            </div>
        </>
    )
}

export default Admin