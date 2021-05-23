import React from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css'


function Home() {
    const history = useHistory();
    return (
        <>
            <div className='container'>
            <h1>Welcome to the Spot booking tool</h1>
            <p>Through this website you can reserve a desk at the office.</p>
            <button
                className='button button1'
                type="button"
                onClick={() => history.push('/signin')}
            >
                Log in
            </button>

            <button
                className='button button1'
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
