import React, { useContext, useEffect, useState } from 'react';
import { Palette } from '@shared/common/constants';
import type { ThemeProviderProps } from './theme.types';

const PROVIDER_NOT_FOUND = 'ThemeProvider is not found!';
const error: () => void = () => {throw Error(PROVIDER_NOT_FOUND)};

const DEFAULT_PALETTE = Palette.LightBlue;
const DEFAULT_IS_DARK = false;

const ThemeContext = React.createContext({
  palette: DEFAULT_PALETTE,
  isDark: DEFAULT_IS_DARK,
  setPalette: (_: Palette) => error(),
  setDark: (_: boolean) => error(),
});

const ThemeProvider = ({
  children,
  palette: _palette = DEFAULT_PALETTE,
  isDark: _isDark = DEFAULT_IS_DARK,
}: ThemeProviderProps) => {
  const [palette, setPalette] = useState(DEFAULT_PALETTE);
  // for toggle use setDark(v => !v)
  const [isDark, setDark] = useState(DEFAULT_IS_DARK);

  useEffect(() => setPalette(_palette), [_palette]);
  useEffect(() => setDark(_isDark), [_isDark]);

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

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
