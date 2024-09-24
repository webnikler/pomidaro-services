import React, { ReactElement, ComponentProps } from 'react';
import type { PropsChildren, PropsHTMLAttributes } from '@shared/common/types';
import { Palette } from '@shared/common/constants';
import { MediaQueryProp } from '@shared/features/media-query';

type PropsHeader = {
  header?: ReactElement | null | false;
}

type LayoutProps = PropsHeader & PropsChildren & PropsHTMLAttributes;

export type SidebarProps = PropsHeader & PropsChildren & PropsHTMLAttributes & {
  placement?: 'left' | 'right';
  width?: MediaQueryProp<number>;
  fixed?: boolean;
  hidden?: boolean;
}

type ContentProps = PropsHeader & PropsChildren & PropsHTMLAttributes & {
  responsive?: boolean;
}

type ComponentWithHeader<P> = React.FC<P> & {
  Header: React.FC<PropsChildren>;
}

type LayoutHeaderProps = PropsChildren & PropsHTMLAttributes;
type ContentHeaderProps = PropsChildren & PropsHTMLAttributes;
type SidebarHeaderProps = PropsChildren & PropsHTMLAttributes;

export type LayoutHeaderComponent = React.FC<LayoutHeaderProps>;
export type ContentHeaderComponent = React.FC<ContentHeaderProps>;
export type SidebarHeaderComponent = React.FC<SidebarHeaderProps>;

export type LayoutComponent = ComponentWithHeader<LayoutProps>;
export type ContentComponent = ComponentWithHeader<ContentProps>;
export type SidebarComponent = ComponentWithHeader<SidebarProps> & {
  Right: React.FC<SidebarProps>;
  Left: React.FC<SidebarProps>;
};

export type LayoutCSSColorVariables = Record<Palette, {
  fill: string;
  stroke?: string;
}>

export type LayoutPresentationProps = ComponentProps<LayoutComponent> & {
  isShowHeader: boolean;
  leftSidebarWidth: number,
  rightSidebarWidth: number,
  isLeftSidebarFixed: boolean,
  isRightSidebarFixed: boolean,
  isLeftSidebarHidden: boolean,
  isRightSidebarHidden: boolean,
  isShowLeftSidebar: boolean;
  isShowLeftSidebarHeader: boolean;
  isShowRightSidebar: boolean;
  isShowRightSidebarHeader: boolean;
  isShowContentHeader: boolean;
  isShowLayoutContentGrid: boolean;
  responsive: boolean;
  palette: Palette;
  isDark: boolean;
}
