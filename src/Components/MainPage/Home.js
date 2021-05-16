import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <h1>Welcome to the Officedays booking tool</h1>
            <p>Through this website you can reserve a desk at your office. Please first select the office you want to book a desk at.</p>
            <p>Als je ingelogd bent, bekijk dan de <Link to="/profile">Profielpagina</Link></p>
            <p>Je kunt ook <Link to="/signin">inloggen</Link> of jezelf <Link to="/signup">registeren</Link> als je nog geen account hebt.</p>
        </>
    );
}

export default Home;
