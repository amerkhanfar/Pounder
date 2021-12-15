import React, { useState, useEffect } from 'react';
import {
  Paper,
  Step,
  Stepper,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { CallMissedSharp } from '@material-ui/icons';
import { commerce } from '../../../lib/commerce';
import { mergeClasses } from '@material-ui/styles';
import AddressForm from '../addressForm';
import PaymentForm from '../paymentForm';
import useStyles from './styles';
import Navbar from '../../Navbar/navbar';

const steps = ['Delivery Address', 'Payment Details'];

const Checkout = ({ cart, order, error, totalItems }) => {
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const classes = useStyles();
  const history = useNavigate();

  useEffect(() => {
    if (cart.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, {
            type: 'cart',
          });

          setCheckoutToken(token);
        } catch {
          if (activeStep !== steps.length) history.push('/');
        }
      };

      generateToken();
    }
  }, [cart]);

  const timeOut = () => {
    setTimeout(() => {
      setIsFinished(true);
    }, 3000);
  };

  let Confirmation = () =>
    order.customer ? (
      <>
        <div>
          <Typography variant="h5">
            Thank you for your purchase, {order.customer.firstname}{' '}
            {order.customer.lastname}!
          </Typography>
          <Divider className={classes.divider} />
          <Typography variant="subtitle2">
            Order ref: {order.customer_reference}
          </Typography>
        </div>
        <br />
        <Button component={Link} variant="outlined" type="button" to="/">
          Back to home
        </Button>
      </>
    ) : (
      <div>
        <Typography variant="h5">Thank you for your purchase</Typography>
        <Divider className={classes.divider} />
        <br />
        <Button component={Link} variant="outlined" type="button" to="/">
          Back to home
        </Button>
      </div>
    );

  if (error) {
    Confirmation = () => (
      <>
        <Typography variant="h5">Error: {error}</Typography>
        <br />
        <Button component={Link} variant="outlined" type="button" to="/">
          Back to home
        </Button>
      </>
    );
  }

  const Form = () => {
    return activeStep == 0 ? (
      <AddressForm checkoutToken={checkoutToken} />
    ) : (
      <PaymentForm
        checkoutToken={checkoutToken}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        timeout={timeOut}
      />
    );
  };
  return (
    <>
      <Navbar totalItems={totalItems} />
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.Paper}>
          <Typography variant="h5" align="center">
            Checkout
          </Typography>

          <Stepper activeStep={activeStep} className={classes.steppers}>
            {steps.map((step) => (
              <Step className={classes.step} key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {activeStep == steps.length ? <Confirmation /> : <Form />}

          <Button
            className={classes.but}
            onClick={(e) => {
              setActiveStep(activeStep + 1);
            }}
          >
            Next
          </Button>

          <Button
            className={classes.but}
            onClick={(e) => {
              setActiveStep(activeStep - 1);
            }}
          >
            Back
          </Button>
          <a href="/cart">Back to cart</a>
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
