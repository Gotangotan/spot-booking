import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import './SignUp.css'
import axios from "axios";

function SignUp() {
    const { handleSubmit, register } = useForm();
    const history = useHistory()

    async function onSubmit(data) {
        console.log(data);
        try{
            const result = await axios.post('http://localhost:8090/users/', {
                username : data.username,
                password : data.password,
                email: data.email
            });
            console.log('post result',result)
            history.push('/SignIn')

        }
        catch (e) {
            console.error(e)
        }
        
    }

    return (
        <>
            <div className='container_signup'>
                <form className='form_signup container_signup' onSubmit={handleSubmit(onSubmit)}>
                    <h1>Sign up</h1>

                    <label htmlFor="email-field">
                        Email:
                        <input
                            type="text"
                            id="email-field"
                            name="email"
                            {...register("email",{required: true})}
                        />
                    </label>

                    <label htmlFor="username-field">
                        Gebruikersnaam:
                        <input
                            type="text"
                            id="username-field"
                            name="username"
                            {...register("username",{required: true})}

                        />
                    </label>

                    <label htmlFor="password-field">
                        Wachtwoord:
                        <input
                            type="text"
                            id="password-field"
                            name="password"
                            {...register("password",{required: true})}
                        />
                    </label>
                    <button
                        className='button button1'
                        type="submit"

                    >
                        Maak account aan
                    </button>
                </form>

            </div>
            <div className='container'>
                <h1>Already signed up?</h1>
                <button
                    className='button button1'
                    type="button"
                    onClick={() => history.push('/SignIn')}
                >
                    Log in
                </button>
            </div>

        </>
    );
}

export default SignUp;