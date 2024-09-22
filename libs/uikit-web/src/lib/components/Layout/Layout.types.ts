import React, { ReactElement } from 'react';
import type { PropsChildren } from '@shared/common/types';

type PropsHeader = {
  header?: ReactElement;
};

type PropsResponsive = {
  responsive?: boolean;
}

type LayoutProps = {
  header?: ReactElement;
  sidebar?: ReactElement;
  sidebarHeader?: ReactElement;
  contentHeader?: ReactElement;
  palette?: LayoutPalette;
  responsive?: boolean;
} & PropsChildren;

type LayoutSubComponents = {
  Header: React.FC<PropsChildren>;
  Content: React.FC<PropsChildren & PropsHeader & PropsResponsive>;
  ContentHeader: React.FC<PropsChildren>;
  Sidebar: React.FC<PropsChildren & PropsHeader>;
  SidebarHeader: React.FC<PropsChildren>;
};

export enum LayoutPalette {
  LightBlue = 'LightBlue',
  DarkBlue = 'DarkBlue',
  Green = 'Green',
  Orange = 'Orange',
  Pink = 'Pink',
  LightPurple = 'LightPurple',
  DarkPurple = 'DarkPurple',
  Grey = 'Grey',
}

export type LayoutComponent = React.FC<LayoutProps> & LayoutSubComponents;
