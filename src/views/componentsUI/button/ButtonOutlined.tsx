import { Button, Grid } from '@mui/material';
import React from 'react';

const ButtonOutlined = () => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Button variant="outlined">Primary</Button>
      </Grid>
      <Grid item>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
      </Grid>
      <Grid item>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
      </Grid>
    </Grid>
  );
};

export default ButtonOutlined;
