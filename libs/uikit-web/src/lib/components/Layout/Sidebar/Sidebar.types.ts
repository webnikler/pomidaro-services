import { Dispatch, SetStateAction } from 'react';

export type SidebarContextValue = {
  hidden: boolean;
  fixed: boolean;
  setHidden: Dispatch<SetStateAction<boolean>>;
  setFixed: Dispatch<SetStateAction<boolean>>;
};
