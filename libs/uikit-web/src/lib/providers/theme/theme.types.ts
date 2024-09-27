import { Palette } from '@shared/common/constants';
import type { PropsChildren } from '@shared/common/types';
import { Dispatch, SetStateAction } from 'react';

export type ThemeDecoratorProps = PropsChildren & {
  palette?: Palette,
  isDark?: boolean;
}

export type ThemeContextValue = {
  palette: Palette;
  isDark: boolean;
  setPalette: Dispatch<SetStateAction<Palette>>;
  setDark: Dispatch<SetStateAction<boolean>>;
};
