import React, { ReactElement, ComponentProps } from 'react';
import type { PropsChildren, PropsHTMLAttributes } from '@shared/common/types';
import { Palette } from '@shared/common/constants';

type PropsHeader = {
  header?: ReactElement | null | false;
}

interface LayoutProps extends PropsHeader, PropsChildren, PropsHTMLAttributes {}

interface SidebarProps extends PropsHeader, PropsChildren, PropsHTMLAttributes {
  left?: boolean;
  right?: boolean;
}

interface ContentProps extends PropsHeader, PropsChildren, PropsHTMLAttributes {
  responsive?: boolean;
}

interface ComponentWithHeader<P> extends React.FC<P> {
  Header: React.FC<PropsChildren>;
}

interface LayoutHeaderProps extends PropsChildren, PropsHTMLAttributes {}
interface ContentHeaderProps extends PropsChildren, PropsHTMLAttributes {}
interface SidebarHeaderProps extends PropsChildren, PropsHTMLAttributes {}

export type LayoutHeaderComponent = React.FC<LayoutHeaderProps>;
export type ContentHeaderComponent = React.FC<ContentHeaderProps>;
export type SidebarHeaderComponent = React.FC<SidebarHeaderProps>;

export type LayoutComponent = ComponentWithHeader<LayoutProps>;
export type ContentComponent = ComponentWithHeader<ContentProps>;
export type SidebarComponent = ComponentWithHeader<SidebarProps>;

export type LayoutCSSColorVariables = Record<Palette, {
  fill: string;
  stroke?: string;
}>

export interface LayoutPresentationProps extends ComponentProps<LayoutComponent> {
  isShowHeader: boolean;
  isShowSidebar: boolean;
  isShowSidebarHeader: boolean;
  isShowContentHeader: boolean;
  isShowLayoutContentGrid: boolean;
  responsive: boolean;
  palette: Palette;
  isDark: boolean;
}
