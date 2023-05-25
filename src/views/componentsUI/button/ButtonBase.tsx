import { Button, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const ButtonBase = () => {
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
        <Button variant="contained" disabled>
          Disabled
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained" href="/components/button">
          Base Link
        </Button>
      </Grid>
      <Grid item>
        <Link to="/components/button">
          <Button variant="contained">React Link</Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default ButtonBase;
