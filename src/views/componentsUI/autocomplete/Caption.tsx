import { optionsData3 } from '@data/optionsData';
import { Autocomplete, Stack, TextField } from '@mui/material';

const Caption = () => {
  return (
    <Stack spacing={3}>
      <Autocomplete
        disablePortal
        id="autocompleteWithCaption"
        options={optionsData3}
        defaultValue={optionsData3[0]}
        renderInput={(params) => <TextField label="Beauty salon" {...params} />}
      />
    </Stack>
  );
};

export default Caption;
