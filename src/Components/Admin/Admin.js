import React, {useEffect, useState} from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";

function Admin(){
    // const { handleSubmit, register } = useForm();
    const [ allDates,setDates ] = useState([])
    const [ allDesks,setDesks ] = useState([])
    // const [ newDate,setNewDate] = useState([])
    const [filter, setFilterDate]=useState([])

    function selectDate(selectedDate){
        setFilterDate(selectedDate)
        console.log('filter',filter)
    }


    useEffect(() => {
        async function getDates(){
            try{
                const response = await axios.get('http://localhost:8090/date/')
                console.log('response.data',response.data)
                setDates(response.data)
                // console.log('allDates',allDates)
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
                const results = await axios.get('http://localhost:8090/desk/')
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

    // async function onSubmit (Dates) {
    //
    //         const data = { "date": Dates.date }
    //
    //         try {
    //             const result = await axios.post('http://localhost:8090/date/', data)
    //             console.log('data date',data.date)
    //             console.log('result data',result)
    //             setNewDate(data.date)
    //             console.log('setNewDate',newDate)
    //             addDesk()
    //             window.location.reload(false);
    //
    //         }
    //         catch (e) {
    //             console.error(e.message)
    //         }
    //
    //      }

    // async function addDesk() {
    //     const data = {
    //         "availability": "Available",
    //         "desk": "Desk1",
    //         "date_id": '24'
    //     }
    //
    //     try {
    //         await axios.post('http://localhost:8090/desk/',data)
    //     }
    //     catch (e) {
    //         console.error(e.message)
    //     }
    //
    // }

    return(
        <>
            <div className='container'>
                <h1>Hi Admin,</h1>
            </div>

            {/*<div className='container'>*/}
            {/*    <h2>Add add a new booking date</h2>*/}
            {/*    <form className='form_signup' onSubmit={handleSubmit(onSubmit)}>*/}
            {/*        <label htmlFor="date">*/}
            {/*            <input*/}
            {/*                type="text"*/}
            {/*                id="date"*/}
            {/*                name="date"*/}
            {/*                placeholder='eg. 01-01-2021'*/}
            {/*                {...register('date')}*/}
            {/*            />*/}
            {/*        </label>*/}
            {/*        <button*/}
            {/*            type="submit"*/}
            {/*            className="button button1"*/}
            {/*        >*/}
            {/*            Create*/}
            {/*        </button>*/}
            {/*    </form>*/}
            {/*</div>*/}
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
            {/*<div className='container'>*/}
            {/*    <h2>Add remove desk to/from [dates]</h2>*/}
            {/*</div>*/}
        </>
    )
}

export default Admin