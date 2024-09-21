import React from 'react';
import { WithChildrenProp } from '../../shared/types';

type GridProps = {
  rowGap?: number;
  columnGap?: number;
} & React.HTMLAttributes<HTMLElement> & WithChildrenProp;

type GridItemProps = {
  col?: 1|2|3|4|5|6|7|8|9|10|11|12;
} & React.HTMLAttributes<HTMLElement> & WithChildrenProp;

type GridSubComponents = {
  Item: React.FC<GridItemProps>;
};

export type GridComponent = React.FC<GridProps> & GridSubComponents;
