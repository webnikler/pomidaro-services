import React from 'react';
import type { Preview } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Palette } from '../src/lib/shared/common/constants';
import { ThemeProvider } from '../src/lib/providers/theme';
import { ThemeDecorator } from '../src/lib/providers/theme/theme.decorator';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  args: {
    $palette: Palette.LightBlue,
    $isDark: false,
  },
  argTypes: {
    $palette: {
      options: Object.values(Palette),
      name: 'Палитра',
      control: 'select',
      table: {
        category: 'Темизация',
      },
    },
    $isDark: {
      name: 'Включить темную тему',
      control: 'boolean',
      table: {
        category: 'Темизация',
      },
    },
  },
  decorators: [
    (Story, { args: { $palette, $isDark } }) => (
      <ThemeDecorator palette={$palette} isDark={$isDark}>
        <Story />
      </ThemeDecorator>
    ),
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};
 
export default preview;
