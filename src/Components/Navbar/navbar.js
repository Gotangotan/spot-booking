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
                        <Link to="/book">Book a spot</Link>
                    </li>
                    <li>
                        <Link to="/Agenda">Agenda</Link>
                    </li>
                    <li>
                        <Link to="/AgendaPut">AgendaPut</Link>
                    </li>
                    <li>
                        <Link to="/RefreshTest">RefreshTest</Link>
                    </li>
                </ul>
            </div>
        </>

    )
}

export default NavBar