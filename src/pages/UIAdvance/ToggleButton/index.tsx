import MainCard from '@components/Cards/MainCard';
import SubCard from '@components/Cards/SubCard';
import { toggleTextBtnList } from '@data/toggleButton';
import { Grid } from '@mui/material';
import { gridSpacing } from '@shared/constant';
import ToggleTextButton from '@views/uiAdvance/toggleButton/ToggleTextButton';
import React from 'react';

const ToggleButton = () => {
  return (
    <MainCard title="Toggle Button">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sm={6} lg={4} xl={3}>
          <SubCard
            title="Toggle Text Button"
            contentSX={{ textAlign: 'center' }}
          >
            <ToggleTextButton toggleList={toggleTextBtnList} />
          </SubCard>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default ToggleButton;
