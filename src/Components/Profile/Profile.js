import React, {useContext} from 'react';
import { AuthContext } from "../context/AuthContext";
import Booking from "../Agenda/Booking";
import './Profile.css'


function Profile() {
    const { user }  = useContext( AuthContext );
    // console.log('user?',user)
    return (
        <>
            <div className='container'>
                <h1>Hey { user && user.username }! Let's book a spot</h1>
                <p><strong>Email: { user && user.email }</strong> </p>
            </div>
            <Booking/>

        </>
    );
}

export default Profile;