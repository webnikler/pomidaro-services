import React from 'react';
import type { PropsChildren, PropsHTMLAttributes } from '@shared/common/types';
import { type MediaQueryProp } from '@shared/features/media-query';

type GridItemSize = 1|2|3|4|5|6|7|8|9|10|11|12;

type GridProps = {
  gap?: MediaQueryProp<number>,
  rowGap?: MediaQueryProp<number>,
  columnGap?: MediaQueryProp<number>,
  margins?: MediaQueryProp<number>,
  columns?: MediaQueryProp<number>,
} & PropsHTMLAttributes & PropsChildren;

type GridItemProps = {
  size?: MediaQueryProp<GridItemSize>;
} & PropsHTMLAttributes & PropsChildren;

type GridItemComponent = React.FC<GridItemProps>;

type GridSubComponents = {
  Item: GridItemComponent;
};

type GridComponent = React.FC<GridProps> & GridSubComponents;

export { GridComponent, GridItemComponent };
