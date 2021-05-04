import React from "react";
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
import RefreshTest from "./Components/Agenda/RefreshTest";

export default function BasicExample() {
    return (
        <Router>
            <div>
                <NavBar/>
                <Switch>
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
                </Switch>
                <Route path="/RefreshTest">
                    <RefreshTest />
                </Route>
            </div>
        </Router>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}
