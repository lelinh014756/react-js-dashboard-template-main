import { Button, Grid } from '@mui/material';
import React from 'react';

const ButtonColor = () => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Button variant="contained">Primary</Button>
      </Grid>
      <Grid item>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained" color="error">
          Error
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained" color="info">
          Info
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained" color="warning">
          Warning
        </Button>
      </Grid>
    </Grid>
  );
};

export default ButtonColor;
