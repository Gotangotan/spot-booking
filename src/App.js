import React from "react";
import "./App.css"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
import LocationRotterdam from "./Components/LocationRotterdam/LocationRotterdam";
import Agenda from "./Components/Agenda/Agenda";
import AgendaPut from "./Components/Agenda/AgendaPut";
import Booking from "./Components/Agenda/Booking";
import Home from "./Components/MainPage/Home";
import Header from "./Components/Header/Header";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import Profile from "./Components/Profile/Profile";
import Dates from "./Components/Agenda/Dates";
import Confirmation from "./Components/Confirmation/Confirmation";



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
                    <Route exact path="/">
                        <MainPage />
                    </Route>
                    <Route path="/book">
                        <LocationRotterdam />
                    </Route>
                    <Route path="/agenda">
                        <Agenda />
                    </Route>
                    <Route path="/agendaPut">
                        <AgendaPut />
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
                </Switch>
            </div>
        </Router>
    );
}
