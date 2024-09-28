import { Palette } from '@shared/common/constants';
import { PropsChildren, PropsHTMLAttributes } from '@shared/common/types';
import React, { ReactElement } from 'react';

export const enum ButtonSize {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
};

export const enum ButtonType {
  primary = 'primary',
  secondary = 'secondary',
  default = 'default',
};

export type ButtonProps = PropsHTMLAttributes & PropsChildren & {
  icon?: ReactElement | null | false;
  disabled?: boolean;
  size?: ButtonSize;
  type?: ButtonType;
  color?: Palette;
};

export type ButtonComponent = React.FC<ButtonProps>;
