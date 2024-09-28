import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from '@components/Grid';
import * as icons from '.';

type StoryArgs = {
  fill: string;
  size: number;
};

const meta: Meta<StoryArgs> = {
  title: 'Design system/Components/Icon',
  render: (props) => (
    <Grid columns={12}>
      {Object.values(icons).map((Icon, i) => (
        <Grid.Item key={i} size={1} style={{ display: 'flex', justifyContent: 'center' }}>
          <Icon {...props} />
        </Grid.Item>
      ))}
    </Grid>
  ),
};

export default meta;

export const Icon: StoryObj<StoryArgs> = {
  argTypes: {
    fill: {
      name: 'Цвет',
      control: 'color',
    },
    size: {
      name: 'Размер',
      control: {
        type: 'range',
        min: 12,
        max: 48,
      }
    }
  },
  args: {
    fill: '#CCCCCC',
    size: 24,
  },
};
