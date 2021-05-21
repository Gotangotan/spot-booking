import React from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";

function Admin(){
    const { handleSubmit, register } = useForm();

    async function onSubmit (newDate) {
            console.log(newDate.date);
            const data = {
                "date": newDate.date
            }
            console.log('data?',data)
            await axios.post('http://localhost:8090/date/', data)

         };


    return(
        <>
            <div className='container'>
                <h1>Hi Admin,</h1>
            </div>
            <div className='container'>
                <h2>Add add/remove booking dates</h2>
                <form className='form_signup' onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="date">
                        <input
                            type="text"
                            id="date"
                            name="date"
                            placeholder='eg. 01-01-2021'
                            {...register('date')}
                        />
                    </label>
                    <button
                        type="submit"
                        className="button button1"
                    >
                        Create
                    </button>
                </form>

            </div>
            <div className='container'>
                <h2>Add add desk to/from [dates}</h2>
            </div>
            <div className='container'>
                <h2>Add remove desk to/from [dates]</h2>
            </div>
        </>
    )
}

export default Admin