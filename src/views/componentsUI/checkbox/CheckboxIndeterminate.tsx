import { Checkbox, FormControlLabel, Stack } from '@mui/material';
import useIndeterminateCheckbox from '@shared/hooks/useIndeterminateCheckbox';
import React from 'react';

const checkList = [
  {
    id: '1',
    label: 'Child checkbox 1',
  },
  {
    id: '2',
    label: 'Child checkbox 2',
  },
];

const CheckboxIndeterminate = () => {
  const { isSelected, selected, isChecked, handleClick, handleSelectAllClick } =
    useIndeterminateCheckbox<(typeof checkList)[0]>(checkList, 'id');

  const dataLength = checkList.length;
  const selectedLength = selected.length;

  return (
    <div>
      <FormControlLabel
        label={isSelected ? `${selectedLength} Selected` : 'Parent Checkbox'}
        control={
          <Checkbox
            indeterminate={isSelected && selectedLength < dataLength}
            checked={dataLength > 0 && selectedLength === dataLength}
            onChange={handleSelectAllClick}
          />
        }
      />

      <Stack className="pl-8">
        {checkList.map((item) => (
          <FormControlLabel
            key={item.id}
            label={item.label}
            control={
              <Checkbox
                checked={isChecked(item.id)}
                onClick={(event) => {
                  handleClick(event, item.id);
                }}
              />
            }
          />
        ))}
      </Stack>
    </div>
  );
};

export default CheckboxIndeterminate;
