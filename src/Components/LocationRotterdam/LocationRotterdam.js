import React from "react";
import Calender from "./Calender/Calender";
function LocationUtrecht() {
    return(
        <div>
            <h2>Reserve your Rotterdam office days.</h2>
            <p>
                Please select the day and then register the day with your details. You will receive a confirmation in your email. Note that the places are limited, please book responsibly.
            </p>
            <p>
                Be sure to acknowledge the Office Protocol, and in case of any questions please reach out to your local facility manager (Arjan, Robin or Fleur).
            </p>
            <Calender/>
        </div>
    )
}

export default LocationUtrecht