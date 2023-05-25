import { NotificationAddOutlined, ShoppingCart } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';
import React from 'react';

import IconButtonFilledTonal from './customButton/IconButtonFilledTonal';

const ButtonForIcon = () => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <IconButtonFilledTonal variant="square">
          <NotificationAddOutlined color="inherit" fontSize="small" />
        </IconButtonFilledTonal>
      </Grid>
      <Grid item>
        <IconButtonFilledTonal>
          <NotificationAddOutlined color="inherit" fontSize="small" />
        </IconButtonFilledTonal>
      </Grid>
      <Grid item>
        <IconButtonFilledTonal variant="circular">
          <NotificationAddOutlined color="inherit" fontSize="small" />
        </IconButtonFilledTonal>
      </Grid>
      <Grid item>
        <IconButton color="secondary" size="small">
          <ShoppingCart fontSize="small" />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton color="secondary">
          <ShoppingCart />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton color="secondary" size="large">
          <ShoppingCart fontSize="large" />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default ButtonForIcon;
