import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Palette } from '@shared/common/constants';
import { ThemeProviderProps } from './theme.types';

const PROVIDER_NOT_FOUND = 'ThemeProvider is not found!';
const error: () => void = () => {throw Error(PROVIDER_NOT_FOUND)};

const DEFAULT_PALETTE = Palette.LightBlue;
const DEFAULT_IS_DARK = false;

const ThemeContext = React.createContext({
  palette: DEFAULT_PALETTE,
  isDark: DEFAULT_IS_DARK,
  setPalette: (_: Palette) => error(),
  setDark: (_: boolean) => error(),
  toggleDark: () => error(),
});

const ThemeProvider = ({
  children,
  palette = DEFAULT_PALETTE,
  isDark = DEFAULT_IS_DARK,
}: ThemeProviderProps) => {
  const [_palette, setPalette] = useState(DEFAULT_PALETTE);
  const [_isDark, setDark] = useState(DEFAULT_IS_DARK);
  const toggleDark = useCallback(() => setDark(!_isDark), [
    _isDark,
    setDark,
  ]);

  useEffect(() => { setPalette(palette) }, [palette]);
  useEffect(() => setDark(isDark), [isDark]);

  return (
    <ThemeContext.Provider value={{
      palette: _palette,
      isDark: _isDark,
      setPalette,
      setDark,
      toggleDark,
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
