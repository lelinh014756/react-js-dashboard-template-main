import MainCard from '@components/Cards/MainCard';
import SubCard from '@components/Cards/SubCard';
import { Grid } from '@mui/material';
import { gridSpacing } from '@shared/constant';
import CheckboxBasic from '@views/componentsUI/checkbox/CheckboxBasic';
import CheckboxColor from '@views/componentsUI/checkbox/CheckboxColor';
import CheckboxIcon from '@views/componentsUI/checkbox/CheckboxIcon';
import CheckboxIndeterminate from '@views/componentsUI/checkbox/CheckboxIndeterminate';
import CheckboxLabel from '@views/componentsUI/checkbox/CheckboxLabel';
import CheckboxLabelPlacement from '@views/componentsUI/checkbox/CheckboxLabelPlacement';
import CheckboxSize from '@views/componentsUI/checkbox/CheckboxSize';
import React from 'react';

const CheckBox = () => {
  return (
    <MainCard title="Checkbox">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} lg={9}>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12} md={6}>
              <SubCard title="Basic checkboxes">
                <CheckboxBasic />
              </SubCard>
            </Grid>
            <Grid item xs={12} md={6}>
              <SubCard title="With label">
                <CheckboxLabel />
              </SubCard>
            </Grid>
            <Grid item xs={12} md={6}>
              <SubCard title="With color">
                <CheckboxColor />
              </SubCard>
            </Grid>
            <Grid item xs={12} md={6}>
              <SubCard title="With size">
                <CheckboxSize />
              </SubCard>
            </Grid>
            <Grid item xs={12} md={6}>
              <SubCard title="Label placement">
                <CheckboxLabelPlacement />
              </SubCard>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Grid container spacing={gridSpacing}>
            <Grid xs={12} item>
              <SubCard title="With size">
                <CheckboxIcon />
              </SubCard>
            </Grid>
            <Grid xs={12} item>
              <SubCard title="Parent & Child">
                <CheckboxIndeterminate />
              </SubCard>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default CheckBox;
