import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import Booking from "../Agenda/Booking";

function Profile() {
    const { user }  = useContext( AuthContext );
    console.log( 'user', user )
    return (
        <>
            <h1>Book a spot</h1>
            <section>
                <h2>for user</h2>
                <p><strong>Username: {user.username}</strong> </p>
                <p><strong>Email:</strong> {user.email}</p>
            </section>
            <section>
            <Booking/>
            </section>
            <p>Terug naar de <Link to="/">Homepagina</Link></p>
        </>
    );
}

export default Profile;