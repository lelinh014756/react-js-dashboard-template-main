import { Avatar, type AvatarProps, ButtonBase, useTheme } from '@mui/material';
import React, { memo } from 'react';
import { type ColorType, type SizeType } from 'types/coreType';

interface Props extends Omit<AvatarProps, 'color'> {
  size?: SizeType;
  color?: ColorType;
}

const IconButtonFilledTonal = ({
  children,
  sx = {},
  size = 'medium',
  color = 'primary',
  ...props
}: Props) => {
  const theme = useTheme();

  let buttonRadius;

  const wrapSize: {
    [key in SizeType]: Record<string, string>;
  } = {
    small: theme.typography.smallAvatar,
    medium: theme.typography.mediumAvatar,
    large: theme.typography.largeAvatar,
  };

  switch (props.variant) {
    case 'square':
      buttonRadius = '0px';
      break;
    case 'circular':
      buttonRadius = '50%';
      break;

    default:
      buttonRadius = '8px';
  }

  return (
    <ButtonBase
      sx={{
        borderRadius: buttonRadius,
      }}
    >
      <Avatar
        variant="rounded"
        sx={{
          ...theme.typography.commonAvatar,
          ...wrapSize[size],

          background: theme.palette[color].light,
          color: theme.palette[color].dark,
          transition: 'all .2s ease-in-out',
          '&[aria-controls="menu-list-grow"],&:hover': {
            background: theme.palette[color].dark,
            color: theme.palette[color].light,
          },
          ...sx,
        }}
        {...props}
      >
        {children}
      </Avatar>
    </ButtonBase>
  );
};

export default memo(IconButtonFilledTonal);
