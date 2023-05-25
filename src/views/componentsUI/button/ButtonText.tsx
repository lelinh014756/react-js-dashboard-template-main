import { Button, Grid } from '@mui/material';
import React from 'react';

const ButtonText = () => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Button variant="text">Primary</Button>
      </Grid>
      <Grid item>
        <Button variant="text" color="secondary">
          Secondary
        </Button>
      </Grid>
      <Grid item>
        <Button variant="text" disabled>
          Disabled
        </Button>
      </Grid>
      <Grid item>
        <Button variant="text" href="/components/button">
          Link
        </Button>
      </Grid>
    </Grid>
  );
};

export default ButtonText;
