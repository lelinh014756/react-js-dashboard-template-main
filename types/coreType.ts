import type React from 'react';

export type IconProps = React.SVGProps<SVGSVGElement>;

export type DirectionType = 'up' | 'down' | 'left' | 'right';

export type StatusDataType = 'activated' | 'pending' | 'reject';

export type SizeType = 'small' | 'medium' | 'large';

export type ColorType =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'success'
  | 'warning';
