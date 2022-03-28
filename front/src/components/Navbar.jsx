import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import useStyles from './styles';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const PrimarySearchAppBar = ({ totalItems, currentUser }) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const classes = useStyles();
  const location = useLocation();
  let navigate = useNavigate();

  function disconnect(){
    axios({
        method: "POST",
        mode : 'cors',
        url: "http://localhost:8000/users/logout",
        withCredentials : true
      }).then(()=>{
        navigate("/");
      })
}

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/accueil" variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="commerce.js" height="75px" className={classes.image} /> La beauté de l'orient
          </Typography>
          <Typography  variant="h6" className={classes.title} color="inherit">
                  ~ Bienvenue {currentUser && currentUser.nameUser} ~
          </Typography>
          <div className={classes.grow} />
          {location.pathname === '/' && (
          <div className={classes.button}>
            
            {currentUser && currentUser.nameUser}
          
          </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default PrimarySearchAppBar;
