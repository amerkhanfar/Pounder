import React from 'react';
import {
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Button,
  Grid,
} from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from './customTextField';

const AddressForm = () => {
  const methods = useForm;
  return (
    <>
      <Typography variant="h6" gutterBottom align="center">
        Delivery Address
      </Typography>
      <FormProvider {...methods}>
        <form>
          <Grid container spacing={3}>
            <FormInput required name="firstName" label="First name" />
            <FormInput required name="lastName" label="Last name" />
            <FormInput required name="address" label="Address" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="city" label="Street" />
            <FormInput required name="zip" label="Phone Number" />
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
