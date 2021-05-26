import React from "react";
import "./App.css"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


import Booking from "./Components/Booking/Booking";
import Alldesks from "./Components/Booking/Alldesks";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import Profile from "./Components/Profile/Profile";
import Dates from "./Components/Booking/Dates";
import Confirmation from "./Components/Confirmation/Confirmation";
import Admin from "./Components/Admin/Admin";

export default function BasicExample() {
    return (
        <Router>
            <Header />
            <div className="content">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/signin">
                        <SignIn />
                    </Route>
                    <Route exact path="/signup">
                        <SignUp />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="/alldesks">
                        <Alldesks />
                    </Route>
                    <Route path="/Booking">
                        <Booking />
                    </Route>
                    <Route path="/Dates">
                        <Dates />
                    </Route>
                    <Route path="/Confirmation">
                        <Confirmation />
                    </Route>
                    <Route path="/Admin">
                        <Admin />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
