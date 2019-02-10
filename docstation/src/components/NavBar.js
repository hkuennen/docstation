//import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"><link href="http://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic" rel="stylesheet" type="text/css">

//import './NavBar.css';

//const styles = {
  //root: {
    //flexGrow: 1,
  //},
//};

//function SimpleAppBar(props) {
  //const { classes } = props;

  //return (
    //<div className={classes.root}>
      //<AppBar position="static" color="lightBlue">
        //<Toolbar>
          //<Typography variant="h6" color="inherit">
            //DocStation
          //</Typography>
          //<a href="/" className="nav-link" active>Meine Termine</a>
          //<a href="/" className="nav-link">Konto</a>
          //<a href="/" className="nav-link">Settings</a>
        //</Toolbar>
      //</AppBar>
    //</div>
  //);
//}

//SimpleAppBar.propTypes = {
  //classes: PropTypes.object.isRequired,
//};


//ab hier war ich es //

<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Purrfect Match</a>
    </div>
    <div id="navbar" class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Signup  <i class="fa fa-user-plus"></i></a></li>
        <li><a href="#about">Login  <i class="fa fa-user"></i></a></li>
      </ul>
    </div>
  </div>
 </nav>