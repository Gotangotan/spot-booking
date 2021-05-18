import React from 'react';
import { Link, useHistory } from 'react-router-dom';

function Home() {
    const history = useHistory();
    return (
        <>
            <h1>Welcome to the Officedays booking tool</h1>
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
            <p>Je kunt ook <Link to="/signin">inloggen</Link> of jezelf <Link to="/signup">registeren</Link> als je nog geen account hebt.</p>
        </>
    );
}

export default Home;
