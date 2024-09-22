import React from 'react';
import type { WithChildrenProp } from '@shared/common/types';
import { type MediaQueryProp } from '@shared/features/media-query';

type GridProps = {
  gap?: MediaQueryProp<number>,
  rowGap?: MediaQueryProp<number>,
  columnGap?: MediaQueryProp<number>,
  margins?: MediaQueryProp<number>,
  columns?: MediaQueryProp<number>,
} & React.HTMLAttributes<HTMLElement> & WithChildrenProp;

type GridItemProps = {
  col?: 1|2|3|4|5|6|7|8|9|10|11|12;
} & React.HTMLAttributes<HTMLElement> & WithChildrenProp;

type GridSubComponents = {
  Item: React.FC<GridItemProps>;
};

type GridComponent = React.FC<GridProps> & GridSubComponents;

export { GridComponent };
