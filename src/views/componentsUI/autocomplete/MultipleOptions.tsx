import { Check } from '@mui/icons-material';
import { Autocomplete, MenuItem, Stack, TextField } from '@mui/material';
import React from 'react';

import { selectChipList } from '../select/data';
import { type SelectItem } from '../type';

export type ChangeFn = (
  e: React.SyntheticEvent<Element, Event>,
  obj: SelectItem[]
) => void;

export interface MultipleOptionsProps {
  isFilter?: boolean;
  id?: string;
  onChange?: ChangeFn;
}

const MultipleOptions = ({
  id,
  isFilter = true,
  onChange,
}: MultipleOptionsProps) => {
  const handleChange = (
    e: React.SyntheticEvent<Element, Event>,
    obj: SelectItem[]
  ) => {
    if (typeof onChange === 'function') {
      onChange(e, obj);
    }
    console.log(obj);
  };

  const defaultValue = [selectChipList[1]] as SelectItem[];

  const defaultValue2 = selectChipList.filter(
    (_item, index) => index > 2 && index < 6
  );

  return (
    <Stack spacing={3}>
      <Autocomplete
        multiple
        id={id}
        options={selectChipList}
        getOptionLabel={(option) => option.label}
        filterSelectedOptions={isFilter}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField {...params} label="multiple options" />
        )}
      />
      <Autocomplete
        multiple
        id={id}
        options={selectChipList}
        getOptionLabel={(option) => option.label}
        onChange={handleChange}
        disableCloseOnSelect
        defaultValue={defaultValue}
        renderInput={(params) => (
          <TextField
            {...params}
            label="custom item checked"
            placeholder="Favorites"
          />
        )}
        renderOption={(props, option, { selected }) => (
          <MenuItem
            key={option.value}
            value={option.value}
            sx={{ justifyContent: 'space-between !important' }}
            {...props}
          >
            {option.label}
            {selected ? <Check color="success" /> : null}
          </MenuItem>
        )}
      />
      <Autocomplete
        multiple
        id={id}
        options={selectChipList}
        getOptionLabel={(option) => option.label}
        limitTags={1}
        onChange={handleChange}
        defaultValue={defaultValue2}
        renderInput={(params) => (
          <TextField {...params} label="limit tags" placeholder="Favorites" />
        )}
      />
    </Stack>
  );
};

export default MultipleOptions;
