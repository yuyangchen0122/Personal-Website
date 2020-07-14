import React from 'react';
/**
 * 
 */
import { Switch, Route } from 'react-router-dom';
/**
 * 
 */
import Home from '../Screens/Home';
import AboutMe from '../Screens/AboutMe';

const Main = () => (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path ="/aboutme">
            <AboutMe />
        </Route>
    </Switch>
)

export default Main;