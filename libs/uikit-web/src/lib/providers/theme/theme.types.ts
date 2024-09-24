import { Palette } from '@shared/common/constants';
import { PropsChildren } from '@shared/common/types';

export interface ThemeProviderProps extends PropsChildren {
  palette?: Palette,
  isDark?: boolean;
}
