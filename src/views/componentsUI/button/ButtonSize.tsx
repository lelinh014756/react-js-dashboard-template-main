import { Button, Grid } from '@mui/material';
import React from 'react';

const ButtonSize = () => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Button variant="contained" color="secondary" size="small">
          Small
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained" color="secondary" size="medium">
          Medium
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained" color="secondary" size="large">
          Large
        </Button>
      </Grid>
    </Grid>
  );
};

export default ButtonSize;
