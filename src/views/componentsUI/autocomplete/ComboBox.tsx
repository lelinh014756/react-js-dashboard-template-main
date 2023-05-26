import { optionsData1, optionsData2 } from '@data/optionsData';
import { Autocomplete, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

const ComboBox = () => {
  return (
    <Stack spacing={3}>
      <Autocomplete
        disablePortal
        id="comboboxDemo1"
        options={optionsData1}
        disableClearable
        defaultValue={optionsData1[0]}
        renderInput={(params) => <TextField {...params} />}
      />
      <Autocomplete
        disablePortal
        id="comboboxDemo2"
        options={optionsData2}
        defaultValue={optionsData2[0]}
        renderInput={(params) => <TextField {...params} />}
      />
    </Stack>
  );
};

export default ComboBox;
