//General imports
import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

//Local imports - Pages
import LandingPage from './pages/landingpage.js';
import ServerPage from './pages/serverpage.js';
import DashboardPage from './pages/dashboardpage.js'
import NotFound from './pages/notfound.js'

ReactDOM.render(
    <Router basename="/">
        <Switch>
            <Route path="/dashboard/:id" key="guild" exact={true}>
                <DashboardPage page={'home'} />
            </Route>
            <Route path="/dashboard/:id/home" key="guild" exact={true}>
                <DashboardPage page={'home'} />
            </Route>
            <Route path="/dashboard/:id/settings" key="guild" exact={true}>
                <DashboardPage page={'settings'} />
            </Route>
            <Route path="/dashboard/:id/music" key="guild" exact={true}>
                <DashboardPage page={'music'} />
            </Route>
            <Route path="/dashboard/:id/tickets" key="guild" exact={true}>
                <DashboardPage page={'tickets'} />
            </Route>
            <Route path="/dashboard/:id/leveling" key="guild" exact={true}>
                <DashboardPage page={'leveling'} />
            </Route>
            <Route path="/dashboard/:id/commands" key="guild" exact={true}>
                <DashboardPage page={'commands'} />
            </Route>
            <Route path="/servers" key="menu" exact={true}>
                <ServerPage />
            </Route>
            <Route path="/" key="home" exact={true}>
                <LandingPage />
            </Route>
            <Route path="/" key="notfound"> {/*If none of the routes are specified then it will default to this 404 page.*/}
                <NotFound />
            </Route>
        </Switch>
    </Router>,
    document.getElementById('root')
)