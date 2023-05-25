import IconSettings from '@assets/svg/IconSettings';
import AnimateButton from '@components/Extended/AnimateButton';
import { Button, Grid, IconButton } from '@mui/material';
import React from 'react';

const ButtonAnimation = () => {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <AnimateButton scale={1.1}>
          <Button variant="contained">Scale</Button>
        </AnimateButton>
      </Grid>
      <Grid item>
        <AnimateButton type="slide">
          <Button variant="contained" color="secondary">
            Slide
          </Button>
        </AnimateButton>
      </Grid>
      <Grid item></Grid>
      <Grid item>
        <AnimateButton type="rotate">
          <IconButton color="primary" size="large">
            <IconSettings />
          </IconButton>
        </AnimateButton>
      </Grid>
    </Grid>
  );
};

export default ButtonAnimation;
