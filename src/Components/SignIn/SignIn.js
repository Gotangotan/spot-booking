import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

function SignIn() {
    const { login } = useContext(AuthContext)
    const { handleSubmit, register } = useForm();
    const history = useHistory()


  async function onSubmit(data) {
      console.log('data input?',data)
        try{
            const result = await axios.get('http://localhost:8090/users/'+data.username, {
                username : data.username,
                password : data.password
            });

            console.log('result username?',result.data.username)
            console.log('input username?',data.username)
            if (result.data.username === data.username){
                console.log('known');
            }


            login(result.data.username)
            history.push('/Profile')
        }
        catch (e) {
            console.error(e)
        }
    }

    return (
        <>
            <h1>Inloggen</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username">
                    Username:
                    <input
                        type="username"
                        id="username"
                        name="username"
                        {...register("username",{required: true})}
                    />
                </label>

                {/*<label htmlFor="password-field">*/}
                {/*    Wachtwoord:*/}
                {/*    <input*/}
                {/*        type="password"*/}
                {/*        id="password-field"*/}
                {/*        name="password"*/}
                {/*        {...register("password")}*/}
                {/*    />*/}
                {/*</label>*/}
                <button
                    type="submit"
                    className="form-button"
                >
                    Start booking
                </button>


            </form>
</>
    );
}

export default SignIn;