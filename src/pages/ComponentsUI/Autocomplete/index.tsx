import MainCard from '@components/Cards/MainCard';
import SubCard from '@components/Cards/SubCard';
import { Grid } from '@mui/material';
import { gridSpacing } from '@shared/constant';
import Caption from '@views/componentsUI/autocomplete/Caption';
import ComboBox from '@views/componentsUI/autocomplete/ComboBox';
import MultipleOptions from '@views/componentsUI/autocomplete/MultipleOptions';
import React from 'react';

const Autocomplete = () => {
  return (
    <MainCard title="Autocomplete">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} md={6} lg={4}>
          <SubCard title="Combo box">
            <ComboBox />
          </SubCard>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <SubCard title="With caption">
            <Caption />
          </SubCard>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <SubCard title="Multiple options">
            <MultipleOptions />
          </SubCard>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default Autocomplete;
