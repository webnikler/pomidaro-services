import React, { ReactElement } from 'react';
import { WithChildrenProp } from '../../shared/types';

type WithHeaderSlot = {
  header?: ReactElement;
};

type WithResponsive = {
  responsive?: boolean;
}

type LayoutProps = {
  header?: ReactElement;
  sidebar?: ReactElement;
  sidebarHeader?: ReactElement;
  contentHeader?: ReactElement;
  palette?: LayoutPalette;
  responsive?: boolean;
} & WithChildrenProp;

type LayoutSubComponents = {
  Header: React.FC<WithChildrenProp>;
  Content: React.FC<WithChildrenProp & WithHeaderSlot & WithResponsive>;
  ContentHeader: React.FC<WithChildrenProp>;
  Sidebar: React.FC<WithChildrenProp & WithHeaderSlot>;
  SidebarHeader: React.FC<WithChildrenProp>;
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
