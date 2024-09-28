import React from 'react';

type RippleProps = {
  color?: string;
  duration?: number;
};

type RippleComponent = React.FC<RippleProps>;

export { RippleComponent, RippleProps };
