import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return(
        <>
            <ul>
                <li>
                    <Link to="/">Offices</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
            </ul>

        </>

    )
}

export default NavBar