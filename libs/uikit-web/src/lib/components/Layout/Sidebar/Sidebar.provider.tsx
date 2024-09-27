import { PropsChildren } from '../../../shared/common/types/props';
import React, { useContext, useState } from 'react';
import { SidebarContextValue } from './Sidebar.types';
import { SidebarPlacement } from '../Layout.types';

const LeftSidebarContext = React.createContext<SidebarContextValue|undefined>(undefined);
const RightSidebarContext = React.createContext<SidebarContextValue|undefined>(undefined);

const useSidebarProviderState = () => {
  const [ hidden, setHidden ] = useState(true);
  const [ fixed, setFixed ] = useState(false);

  return { hidden, setHidden, fixed, setFixed };
};

const LeftSidebarProvider = ({ children }: PropsChildren) => {
  const value = useSidebarProviderState();

  return (
    <LeftSidebarContext.Provider value={value}>
      {children}
    </LeftSidebarContext.Provider>
  );
};

const RightSidebarProvider = ({ children}: PropsChildren) => {
  const value = useSidebarProviderState();

  return (
    <RightSidebarContext.Provider value={value}>
      {children}
    </RightSidebarContext.Provider>
  );
};

const useSidebar = (placement: SidebarPlacement) => {
  const Context = placement === SidebarPlacement.left
    ? LeftSidebarContext
    : RightSidebarContext;
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error('SidebarProvider is not found!');
  }

  return context;
};

useSidebar.left = useSidebar.bind(null, SidebarPlacement.left);
useSidebar.right = useSidebar.bind(null, SidebarPlacement.right);

const SidebarProvider = ({ children }: PropsChildren) => (
  <LeftSidebarProvider>
    <RightSidebarProvider>
      {children}
    </RightSidebarProvider>
  </LeftSidebarProvider>
);

export { SidebarProvider, useSidebar };
