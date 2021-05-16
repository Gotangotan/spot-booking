import React,{ useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

//installeer axios
//importeer axios
//async fucntie
//try/catch
// loading state/error state
//post request
//succemelding tonen door een state aan te maken
//gebruiker doorsturen naar onlog

function SignUp() {
    const [registerSucces, toggleRegisterSucces] = useState(false)
    const history = useHistory()
  const { handleSubmit, register } = useForm();

  async function onSubmit(data) {
      console.log(data);
      try {
    const result = await axios.post('http://localhost:3000/register',{
          email: data.email,
          password: data.password, username:data.username
    });
          console.log(result);
          toggleRegisterSucces(true)
          // setTimeout(()=>{history.push('/signin')},2000)
          history.push('/signin');
    } catch (e){
      console.error(e)
    }
  }

  return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email-field">
          Email:
          <input
            type="email"
            id="email-field"
            name="email"
            {...register("email")}
          />
        </label>

        <label htmlFor="username-field">
          Gebruikersnaam:
          <input
            type="text"
            id="username-field"
            name="username"
            {...register("username")}
          />
        </label>

        <label htmlFor="password-field">
          Wachtwoord:
          <input
            type="password"
            id="password-field"
            name="password"
            {...register("password")}
          />
        </label>
        <button
          type="submit"
          className="form-button"
        >
          Maak account aan
        </button>
          {registerSucces === true && <p>regsitreren gelukt</p>}
      </form>
      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;