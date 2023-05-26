import { Checkbox, FormControlLabel, Grid } from '@mui/material';
import React from 'react';

const CheckboxLabelPlacement = () => {
  return (
    <Grid
      container
      spacing={3}
      sx={{
        alignItems: 'center',
      }}
    >
      <Grid item>
        <FormControlLabel
          label="top"
          labelPlacement="top"
          control={<Checkbox />}
        />
      </Grid>
      <Grid item>
        <FormControlLabel
          sx={{
            margin: 0,
          }}
          label="start"
          labelPlacement="start"
          control={<Checkbox />}
        />
      </Grid>
      <Grid item>
        <FormControlLabel
          label="bottom"
          labelPlacement="bottom"
          control={<Checkbox />}
        />
      </Grid>
      <Grid item>
        <FormControlLabel
          label="end"
          labelPlacement="end"
          control={<Checkbox />}
        />
      </Grid>
    </Grid>
  );
};

export default CheckboxLabelPlacement;
