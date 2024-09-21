import { Preview } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};
 
export default preview;