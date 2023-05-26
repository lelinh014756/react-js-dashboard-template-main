import { Checkbox, FormControlLabel, Grid } from '@mui/material';
import React from 'react';

const CheckboxSize = () => {
  return (
    <Grid container spacing={3}>
      <Grid item>
        <FormControlLabel
          control={<Checkbox color="secondary" defaultChecked size="small" />}
          label="Small"
        />
      </Grid>
      <Grid item>
        <FormControlLabel
          control={<Checkbox color="secondary" defaultChecked />}
          label="Medium"
        />
      </Grid>
      <Grid item>
        <FormControlLabel
          control={
            <Checkbox
              color="secondary"
              defaultChecked
              sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
            />
          }
          label="Custom"
        />
      </Grid>
    </Grid>
  );
};

export default CheckboxSize;
