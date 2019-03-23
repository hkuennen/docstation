import React from 'react';
import  { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Termine from './Pages/Termine';
import Einstellungen from './Pages/Einstellungen';
import Auswahlseite from './Pages/Auswahlseite';
import Patient from './Pages/Patient';


 const Router = () => (
     <BrowserRouter>
        <Switch>
            {/* MAIN NAVIGATION ROUTES */}
            <Route exact path="/" component={ Auswahlseite }/>
            <Route exact path="/home" component={ App }/>
            <Route exact path="/termine" component={ Termine }/>
            <Route exact path="/einstellungen" component={ Einstellungen }/>
            <Route exact path="/patient" component={ Patient }/>
            </Switch>
            </BrowserRouter>
 );

 export default Router; 