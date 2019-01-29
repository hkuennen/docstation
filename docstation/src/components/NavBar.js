import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './NavBar.css';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="lightBlue">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            DocStation
          </Typography>
          <a href="/" className="nav-link" active>Meine Termine</a>
          <a href="/" className="nav-link">Konto</a>
          <a href="/" className="nav-link">Einstellungen</a>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);