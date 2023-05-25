import SubCard from '@components/Cards/SubCard';
import { LayersTwoTone, Refresh, Save } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Button, Grid } from '@mui/material';
import React, { memo, useState } from 'react';

const ButtonLoading = () => {
  const [loading, setLoading] = useState([true, true, true, false]);

  const isRefresh = !loading.includes(false);

  const onLoading = (loadIndex: number) => {
    setLoading((prev) =>
      prev.map((item, index) => {
        if (index === loadIndex) {
          return true;
        }

        return item;
      })
    );
  };

  return (
    <SubCard
      title="Loading"
      secondary={
        isRefresh ? (
          <>
            <Button
              startIcon={<Refresh />}
              onClick={() => {
                setLoading([false, false, false, false]);
              }}
            >
              Refresh
            </Button>
          </>
        ) : (
          ''
        )
      }
    >
      <Grid container spacing={2}>
        <Grid item>
          <LoadingButton
            loading={loading[0]}
            variant="contained"
            color="secondary"
            onClick={() => {
              onLoading(0);
            }}
          >
            Submit
          </LoadingButton>
        </Grid>
        <Grid item>
          <LoadingButton
            variant="outlined"
            loading={loading[1]}
            loadingIndicator="Loading…"
            onClick={() => {
              onLoading(1);
            }}
          >
            Upload File
          </LoadingButton>
        </Grid>
        <Grid item>
          <LoadingButton
            variant="contained"
            loading={loading[2]}
            loadingPosition="start"
            startIcon={<Save />}
            onClick={() => {
              onLoading(2);
            }}
          >
            Save
          </LoadingButton>
        </Grid>
        <Grid item>
          <LoadingButton
            variant="contained"
            color="success"
            loading={loading[3]}
            loadingPosition="start"
            startIcon={<LayersTwoTone />}
            onClick={() => {
              onLoading(3);
            }}
          >
            Try Me
          </LoadingButton>
        </Grid>
      </Grid>
    </SubCard>
  );
};

export default memo(ButtonLoading);
