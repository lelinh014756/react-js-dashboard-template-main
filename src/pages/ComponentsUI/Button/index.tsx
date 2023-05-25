import MainCard from '@components/Cards/MainCard';
import SubCard from '@components/Cards/SubCard';
import { Grid } from '@mui/material';
import { gridSpacing } from '@shared/constant';
import ButtonAnimation from '@views/componentsUI/button/ButtonAnimation';
import ButtonBase from '@views/componentsUI/button/ButtonBase';
import ButtonColor from '@views/componentsUI/button/ButtonColor';
import ButtonForIcon from '@views/componentsUI/button/ButtonForIcon';
import ButtonIcons from '@views/componentsUI/button/ButtonIcons';
import ButtonLoading from '@views/componentsUI/button/ButtonLoading';
import ButtonOutlined from '@views/componentsUI/button/ButtonOutlined';
import ButtonSize from '@views/componentsUI/button/ButtonSize';
import ButtonText from '@views/componentsUI/button/ButtonText';
import React from 'react';

const Button = () => {
  return (
    <MainCard title="Button">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sm={6} lg={4}>
          <SubCard title="Base">
            <ButtonBase />
          </SubCard>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <SubCard title="Colors">
            <ButtonColor />
          </SubCard>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <SubCard title="Outlined">
            <ButtonOutlined />
          </SubCard>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <SubCard title="Text">
            <ButtonText />
          </SubCard>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <SubCard title="Size">
            <ButtonSize />
          </SubCard>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <SubCard title="With Icons">
            <ButtonIcons />
          </SubCard>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <SubCard title="Icon Button">
            <ButtonForIcon />
          </SubCard>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <SubCard title="Animation">
            <ButtonAnimation />
          </SubCard>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <ButtonLoading />
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default Button;
