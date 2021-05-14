import React from "react";
import './MainPage.css'
import { Link } from "react-router-dom";

function MainPage() {
    return(
        <>
            <section className='FlexContainer'>
                <div className='FlexItem'>
                    <p>Welcome to the Officedays booking tool</p>
                    <p>Through this website you can reserve a desk at your office.</p>
                </div>
                <div className='FlexItem ColumnRight'>
                    <Link className='button' to="/book">Home</Link>
                </div>
            </section>
        </>
    )
}

export default MainPage