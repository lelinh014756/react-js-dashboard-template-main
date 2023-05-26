import { Checkbox, FormControlLabel, Grid } from '@mui/material';
import React from 'react';

const CheckboxLabel = () => {
  return (
    <Grid container spacing={3}>
      <Grid item>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Label Checked"
        />
      </Grid>
      <Grid item>
        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
      </Grid>
    </Grid>
  );
};

export default CheckboxLabel;
