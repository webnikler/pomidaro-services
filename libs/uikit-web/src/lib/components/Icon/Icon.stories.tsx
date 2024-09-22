import type { Meta, StoryObj } from '@storybook/react';
import Grid from '@components/Grid';
import * as icons from '.';

type StoryArgs = {
  fill: string;
  size: number;
};

const meta: Meta<StoryArgs> = {
  title: 'components/Icons',
  render: (props) => (
    <Grid margins={100}>
      {Object.values(icons).map((Icon, i) => (
        <Grid.Item key={i} col={1} style={{ display: 'flex', justifyContent: 'center' }}>
          <Icon {...props} />
        </Grid.Item>
      ))}
    </Grid>
  ),
};

export default meta;

export const Icons: StoryObj<StoryArgs> = {
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
