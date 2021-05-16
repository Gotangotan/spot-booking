import React from "react";
import "./App.css"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import NavBar from "./Components/Navbar/navbar";
import MainPage from "./Components/MainPage/MainPage";
import LocationRotterdam from "./Components/LocationRotterdam/LocationRotterdam";
import Agenda from "./Components/Agenda/Agenda";
import AgendaPut from "./Components/Agenda/AgendaPut";
import Booking from "./Components/Agenda/Booking";
import Home from "./Components/MainPage/Home";
import Header from "./Components/Header/Header";
import SignIn from "./Components/Login/SignIn";


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

                </Switch>
            </div>
        </Router>
    );
}
