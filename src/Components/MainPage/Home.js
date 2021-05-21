import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './MainPage.css'
import './Home.css'


function Home() {
    const history = useHistory();
    return (
        <>
            <div className='container'>
            <h1>Welcome to the Spot booking tool</h1>
            <p>Through this website you can reserve a desk at the office.</p>
            <button
                type="button"
                onClick={() => history.push('/signin')}
            >
                Log in
            </button>

            <button
                type="button"
                onClick={() => history.push('/signup')}
            >
                Signup
            </button>
            </div>
        </>
    );
}

export default Home;
