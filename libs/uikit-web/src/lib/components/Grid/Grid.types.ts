import React from 'react';
import { WithChildrenProp } from '../../shared/types';

type GridProps = {
  rowGap?: number;
  columnGap?: number;
} & React.HTMLAttributes<HTMLElement> & WithChildrenProp;

type GridItemProps = {
  col?: number;
} & React.HTMLAttributes<HTMLElement> & WithChildrenProp;

type GridSubComponents = {
  Item: React.FC<GridItemProps>;
};

export type GridComponent = React.FC<GridProps> & GridSubComponents;
