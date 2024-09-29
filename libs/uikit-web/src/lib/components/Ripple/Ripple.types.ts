import React from 'react';

export type RippleItem = {
  x: number;
  y: number;
  size: number;
}

export type RippleContainerProps = {
  color?: string;
  duration?: number;
};

export type RippleContainerComponent = React.FC<RippleContainerProps>;
