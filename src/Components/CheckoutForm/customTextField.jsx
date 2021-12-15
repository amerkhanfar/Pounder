import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

function FormInput({ name, label, required }) {
  const { control } = useForm();
  const isError = false;

  return (
    <Grid item xs={12} sm={6} lg={6}>
      <Controller
        name="name"
        control={control}
        required
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            placeholder={label}
            label={label}
            required
          />
        )}
        error={isError}
      />
    </Grid>
  );
}

export default FormInput;
