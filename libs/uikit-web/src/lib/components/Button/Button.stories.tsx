import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { IconAdd } from '@components/Icon';
import { Grid } from '@components/Grid';
import { Palette } from '@shared/common/constants';
import { ButtonType } from './Button.types';

const meta: Meta = {
  title: 'Design system/Components/Button',
  component: Button,
  parameters: {
    backgrounds: {
      default: 'light',
    }
  }
};

export default meta;

type Story = StoryObj;

export const ButtonStory: Story = {
  name: 'Button',
  render: () => {
    return (
      <Grid columns={8}>
        {Object.values(Palette).map(color => (
          <Grid.Item size={1}>
            <Button
              color={color}
              type={ButtonType.primary}
              icon={<IconAdd />}
            >Создать</Button>
          </Grid.Item>
        ))}
        {Object.values(Palette).map(color => (
          <Grid.Item size={1}>
            <Button
              color={color}
              type={ButtonType.secondary}
              icon={<IconAdd />}
            >Создать</Button>
          </Grid.Item>
        ))}
        {Object.values(Palette).map(color => (
          <Grid.Item size={1}>
            <Button
              color={color}
              type={ButtonType.default}
              icon={<IconAdd />}
            >Создать</Button>
          </Grid.Item>
        ))}
        {Object.values(Palette).map(color => (
          <Grid.Item size={1}>
            <Button
              disabled
              color={color}
              type={ButtonType.default}
              icon={<IconAdd />}
            >Создать</Button>
          </Grid.Item>
        ))}
      </Grid>
    );
  },
};
