import React, { ReactElement } from 'react';

type WithChildrenProp = {
  children?: React.ReactNode;
};

type WithHeaderSlot = {
  header?: ReactElement;
};

type LayoutProps = {
  header?: ReactElement;
  sidebar?: ReactElement;
  sidebarHeader?: ReactElement;
  contentHeader?: ReactElement;
  palette?: LayoutPalette;
};

type LayoutSubComponents = {
  Header: React.FC<WithChildrenProp>;
  Content: React.FC<WithChildrenProp & WithHeaderSlot>;
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

export type LayoutComponent = React.FC<LayoutProps & WithChildrenProp> & LayoutSubComponents;
