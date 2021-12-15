import React from 'react';
import {
  Grid,
  Typography,
  Container,
  Button,
  ListItemSecondaryAction,
} from '@material-ui/core';
import CartItem from './cartItem/cartItem';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/navbar';

import useStyles from './styles';

const Cart = ({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  const classes = useStyles();

  const EmptyCart = () => {
    return (
      <Typography variant="h4" align="center" className={classes.empty}>
        You Don't Have Any Items Here,
        <Link to="/products" className={classes.link}>
          Start Adding Some!
        </Link>
      </Typography>
    );
  };

  const FilledCart = ({ totalItems }) => {
    return (
      <div>
        <Navbar totalItems={totalItems} />
        <Grid container spacing={3}>
          {cart.line_items.map((item) => (
            <Grid item s={4} key={item.id} className={classes.grid}>
              <CartItem
                item={item}
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            </Grid>
          ))}
        </Grid>
        <div className={classes.cardDetails}>
          <Typography variant="h4">
            Subtotal: JD {cart.subtotal.formatted}
          </Typography>
          <div>
            <Button
              className={classes.emptyButton}
              size="large"
              type="button"
              variant="contained"
              color="secondary"
              onClick={handleEmptyCart}
            >
              Empty cart
            </Button>
            <Button
              className={classes.checkoutButton}
              to="/checkout"
              size="large"
              type="button"
              variant="contained"
              color="primary"
              component={Link}
              to="/checkout"
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    );
  };

  if (!cart.line_items) {
    return 'Loading';
  }
  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography variant="h4" className={classes.title} gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
