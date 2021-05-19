import React, {useContext} from 'react';
import { Link, Redirect  } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import Booking from "../Agenda/Booking";



function Logout() {

    localStorage.clear()


}

function Profile() {
    const { user }  = useContext( AuthContext );
    console.log('user?',user)

    return (
        <>
            <h1>Book a spot</h1>
            <section>
                <p><strong>Username: {user && user.username}</strong> </p>
                <p><strong>Email: {user && user.email}</strong> </p>      <h2>for user</h2>
            </section>
            <section>
            <Booking/>
            </section>
            <button onClick={() => Logout()}>Uitloggen</button>

        </>
    );
}

export default Profile;