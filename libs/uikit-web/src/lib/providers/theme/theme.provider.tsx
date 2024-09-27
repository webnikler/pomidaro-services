import React, { useContext, useState } from 'react';
import { Palette } from '@shared/common/constants';
import type { PropsChildren } from '@shared/common/types';
import type { ThemeContextValue } from './theme.types';

const ThemeContext = React.createContext<ThemeContextValue|undefined>(undefined);

const ThemeProvider = ({ children }: PropsChildren) => {
  const [palette, setPalette] = useState(Palette.LightBlue);
  const [isDark, setDark] = useState(false);

  return (
    <ThemeContext.Provider value={{
      palette,
      isDark,
      setPalette,
      setDark,
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('ThemeProvider is not found!');
  }

  return context;
}

export { ThemeProvider, useTheme };
