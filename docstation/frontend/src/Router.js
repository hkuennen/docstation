import React from 'react';
import  { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import NavBar from './components/NavBar/NavBar';
import Profil from './Profil';

 const Router = () => (
     <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ App }/>
            <Route path="/settings" component={ NavBar}/>
            <Route path="/termine" component={ NavBar}/>
            <Route path="/profil" component={ Profil}/>
        </Switch>
     </BrowserRouter>
 );

 export default Router; 