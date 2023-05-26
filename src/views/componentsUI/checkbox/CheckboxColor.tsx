import { Checkbox, Grid } from '@mui/material';
import React from 'react';

const CheckboxColor = () => {
  return (
    <Grid container spacing={3}>
      <Grid item>
        <Checkbox
          sx={(theme) => ({
            color: theme.palette.primary.main,
          })}
          defaultChecked
        />
      </Grid>
      <Grid item>
        <Checkbox
          sx={(theme) => ({
            color: theme.palette.secondary.main,
          })}
          color="secondary"
          defaultChecked
        />
      </Grid>
      <Grid item>
        <Checkbox
          sx={(theme) => ({
            color: theme.palette.success.main,
          })}
          color="success"
          defaultChecked
        />
      </Grid>
      <Grid item>
        <Checkbox
          sx={(theme) => ({
            color: theme.palette.warning.main,
          })}
          color="warning"
          defaultChecked
        />
      </Grid>
      <Grid item>
        <Checkbox
          sx={(theme) => ({
            color: theme.palette.error.main,
          })}
          color="error"
          defaultChecked
        />
      </Grid>
    </Grid>
  );
};

export default CheckboxColor;
