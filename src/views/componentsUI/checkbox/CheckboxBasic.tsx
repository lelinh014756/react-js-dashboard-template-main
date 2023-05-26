import { Checkbox, Grid } from '@mui/material';
import React from 'react';

const CheckboxBasic = () => {
  return (
    <Grid container spacing={3}>
      <Grid item>
        <Checkbox defaultChecked />
      </Grid>
      <Grid item>
        <Checkbox
          color="secondary"
          sx={(theme) => ({
            color: theme.palette.secondary.main,
          })}
          defaultChecked
        />
      </Grid>
      <Grid item>
        <Checkbox color="success" />
      </Grid>
      <Grid item>
        <Checkbox disabled />
      </Grid>
      <Grid item>
        <Checkbox disabled checked />
      </Grid>
    </Grid>
  );
};

export default CheckboxBasic;
