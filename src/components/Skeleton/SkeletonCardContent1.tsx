import MainCard from '@components/Cards/MainCard';
import SubCard from '@components/Cards/SubCard';
import { Grid, Skeleton } from '@mui/material';
import { gridSpacing } from '@shared/constant';
import React from 'react';

interface Props {
  title: string;
}

const SkeletonCardContent1 = ({ title }: Props) => {
  return (
    <MainCard title={title}>
      <Grid container spacing={gridSpacing}>
        {Array.from({ length: 12 }).map((_item, index) => (
          <Grid key={index} item xs={12} sm={6} lg={4} xl={3}>
            <SubCard>
              <Skeleton variant="text" height={28} sx={{ mb: 0.5 }} />
              <Skeleton variant="rectangular" width={'100%'} height={170} />
            </SubCard>
          </Grid>
        ))}
      </Grid>
    </MainCard>
  );
};

export default SkeletonCardContent1;
