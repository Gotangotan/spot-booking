import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'

function NavBar() {
    return(
        <>
            <div className='Nav-container'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Booking">Booking</Link>
                    </li>
                </ul>
            </div>
        </>

    )
}

export default NavBar