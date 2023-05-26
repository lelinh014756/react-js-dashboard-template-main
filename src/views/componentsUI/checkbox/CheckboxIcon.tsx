import {
  Bookmark,
  BookmarkBorder,
  Favorite,
  FavoriteBorder,
  Star,
  StarBorder,
} from '@mui/icons-material';
import { Checkbox, Grid } from '@mui/material';
import React from 'react';

const CheckboxIcon = () => {
  return (
    <Grid container spacing={3}>
      <Grid item>
        <Checkbox
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
          color="error"
          defaultChecked
        />
      </Grid>
      <Grid item>
        <Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} />
      </Grid>
      <Grid item>
        <Checkbox
          icon={<StarBorder />}
          checkedIcon={<Star />}
          color="warning"
          sx={(theme) => ({
            '&:hover .MuiSvgIcon-root': {
              color: theme.palette.warning.main,
            },
          })}
        />
      </Grid>
    </Grid>
  );
};

export default CheckboxIcon;
