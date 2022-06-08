import React from 'react';
import {
  AppBar,
  Toolbar,
  MenuItem,
  IconButton,
  Menu,
  Badge,
  Typography,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/plogo.jpg';
import useStyles from './styles';
const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar className={classes.toolBar}>
          <Typography
            variant="h4"
            color="inherit"
            class={classes.title}
            component={Link}
            to="/"
          >
            <img
              src={logo}
              alt="Pounder Logo"
              height="25px"
              className={classes.image}
            />
          </Typography>

          <div className={classes.bar}>
            <Link to="/about" className={classes.link}>
              About
            </Link>
            <Link to="/products" className={classes.link}>
              Order
            </Link>
          </div>

          <div className={classes.grow} />

          <div className={classes.button}>
            <IconButton
              aria-label="Show Cart Items"
              color="inherit"
              component={Link}
              to="/cart"
            >
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
