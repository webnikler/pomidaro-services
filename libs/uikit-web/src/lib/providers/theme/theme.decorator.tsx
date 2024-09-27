import { Palette } from '@shared/common/constants';
import type { ThemeDecoratorProps } from './theme.types';
import { useTheme } from './theme.provider';
import { useEffect } from 'react';

export const ThemeDecorator = ({
  palette = Palette.LightBlue,
  isDark = false,
  children,
}: ThemeDecoratorProps) => {
  const { setPalette, setDark } = useTheme();

  useEffect(() => setPalette(palette), [palette, setPalette]);
  useEffect(() => setDark(isDark), [isDark, setDark]);

  return children;
};
