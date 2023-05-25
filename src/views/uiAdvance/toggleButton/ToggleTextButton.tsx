import { Box, Button } from '@mui/material';
import React, { memo, useRef, useState } from 'react';

export interface ToggleVal {
  label: string;
  value: string;
}

interface Props {
  buttonSize?: string | number;
  toggleList: ToggleVal[];
  initialVal?: ToggleVal;
  initialIndex?: 1 | 2;
  onChange?: (val: ToggleVal) => void;
}

const ToggleTextButton = ({
  buttonSize = 200,
  toggleList,
  initialVal,
  initialIndex = 1,
  onChange,
}: Props) => {
  const [valChecked, setValChecked] = useState(
    initialVal ?? toggleList[initialIndex - 1]
  );

  const memoRef = useRef(valChecked);

  if (typeof buttonSize === 'number') {
    buttonSize = String(buttonSize) + 'px';
  }

  const widthBox = `calc(${buttonSize} / 2)`;
  const IS_FIRST_CHECKED = valChecked?.value === toggleList[0]?.value;
  const IS_WIDTH_PERCENT = buttonSize.includes('%');

  const handleClick = (val: ToggleVal) => {
    const memoVal = memoRef.current?.value;

    setValChecked(val);

    if (memoVal !== val.value) {
      memoRef.current = val;

      onChange?.(val);
    }
  };

  return (
    <div>
      <Box
        sx={(theme) => ({
          position: 'relative',
          width: buttonSize,
          borderRadius: '30px',
          bgcolor: theme.palette.primary.light,
          boxShadow: '1px 1px 2px rgb(165, 165, 165) inset',
        })}
      >
        <Box
          sx={(theme) => ({
            position: 'absolute',
            borderRadius: '30px',
            bgcolor: theme.palette.primary.main,
            transition: 'all 0.5s ease',
            top: 0,
            bottom: 0,
            width: IS_WIDTH_PERCENT ? '50%' : widthBox,
            transform: `translateX(${IS_FIRST_CHECKED ? 0 : '100%'})`,
          })}
        ></Box>
        {toggleList.map((item) => (
          <Button
            key={item.value}
            disableRipple={item.value !== valChecked?.value}
            variant="text"
            sx={(theme) => ({
              width: IS_WIDTH_PERCENT ? '50%' : widthBox,
              borderRadius: '30px',
              color:
                item.value === valChecked?.value
                  ? '#fff'
                  : theme.palette.primary.main,
            })}
            onClick={() => {
              handleClick(item);
            }}
          >
            {item.label}
          </Button>
        ))}
      </Box>
    </div>
  );
};

export default memo(ToggleTextButton);
