import { Delete, Save, Send } from '@mui/icons-material';
import { Button, Grid } from '@mui/material';
import React from 'react';

const ButtonIcons = () => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Button variant="contained" endIcon={<Send />}>
          Send
        </Button>
      </Grid>
      <Grid item>
        <Button variant="outlined" startIcon={<Delete />} color="error">
          Delete
        </Button>
      </Grid>
      <Grid item>
        <Button variant="outlined" startIcon={<Save />} disabled>
          Save
        </Button>
      </Grid>
    </Grid>
  );
};

export default ButtonIcons;
