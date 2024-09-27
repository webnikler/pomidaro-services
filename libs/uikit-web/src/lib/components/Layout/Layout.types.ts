import React, { ReactElement } from 'react';
import type { PropsChildren, PropsHTMLAttributes } from '@shared/common/types';
import { Palette } from '@shared/common/constants';

type PropsHeader = {
  header?: ReactElement | null | false;
}

type LayoutProps = PropsHeader & PropsChildren & PropsHTMLAttributes;

export const enum SidebarPlacement {
  right = 'right',
  left = 'left',
}

export type SidebarProps = PropsHeader & PropsChildren & PropsHTMLAttributes & {
  placement?: SidebarPlacement;
  fixedOnBreakpoint?: string;
}

export type ContentProps = PropsHeader & PropsChildren & PropsHTMLAttributes & {
  responsive?: boolean;
}

type ComponentWithHeader<P> = React.FC<P> & {
  Header: React.FC<PropsChildren & PropsHTMLAttributes>;
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
}>;
