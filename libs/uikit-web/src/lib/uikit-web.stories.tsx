import type { Meta, StoryObj } from '@storybook/react';
import { UikitWeb } from './uikit-web';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof UikitWeb> = {
  component: UikitWeb,
  title: 'UikitWeb',
};
export default meta;
type Story = StoryObj<typeof UikitWeb>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to UikitWeb!/gi)).toBeTruthy();
  },
};
