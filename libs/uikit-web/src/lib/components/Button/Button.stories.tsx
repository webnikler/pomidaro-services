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

export const OnlyText: Story = {
  name: 'С текстом',
  render: () => {
    return (
      <Grid columns={9}>
        <span></span>
        {Object.values(Palette).map(color => (
          <Grid.Item size={1}>
            {color}
          </Grid.Item>
        ))}
        <span>Primary</span>
        {Object.values(Palette).map(color => (
          <Grid.Item size={1}>
            <Button
              color={color}
              type={ButtonType.primary}
            >Создать</Button>
          </Grid.Item>
        ))}
       <span>Secondary</span>
        {Object.values(Palette).map(color => (
          <Grid.Item size={1}>
            <Button
              color={color}
              type={ButtonType.secondary}
            >Создать</Button>
          </Grid.Item>
        ))}
         <span>Default</span>
        {Object.values(Palette).map(color => (
          <Grid.Item size={1}>
            <Button
              color={color}
              type={ButtonType.default}
            >Создать</Button>
          </Grid.Item>
        ))}
      </Grid>
    );
  },
};

export const OnlyIcon: Story = {
  name: 'С иконкой',
  render: () => {
    return (
      <Grid columns={9}>
        <span></span>
        {Object.values(Palette).map(color => (
          <Grid.Item size={1}>
            {color}
          </Grid.Item>
        ))}
        <span>Primary</span>
        {Object.values(Palette).map(color => (
          <Grid.Item size={1}>
            <Button
              color={color}
              type={ButtonType.primary}
              icon={<IconAdd />}
            />
          </Grid.Item>
        ))}
       <span>Secondary</span>
        {Object.values(Palette).map(color => (
          <Grid.Item size={1}>
            <Button
              color={color}
              type={ButtonType.secondary}
              icon={<IconAdd />}
            />
          </Grid.Item>
        ))}
         <span>Default</span>
        {Object.values(Palette).map(color => (
          <Grid.Item size={1}>
            <Button
              color={color}
              type={ButtonType.default}
              icon={<IconAdd />}
            />
          </Grid.Item>
        ))}
      </Grid>
    );
  },
};

export const IconAndText: Story = {
  name: 'С иконкой и текстом',
  render: () => {
    return (
      <Grid columns={9}>
        <span></span>
        {Object.values(Palette).map(color => (
          <Grid.Item size={1}>
            {color}
          </Grid.Item>
        ))}
        <span>Primary</span>
        {Object.values(Palette).map(color => (
          <Grid.Item size={1}>
            <Button
              color={color}
              type={ButtonType.primary}
              icon={<IconAdd />}
            >Создать</Button>
          </Grid.Item>
        ))}
       <span>Secondary</span>
        {Object.values(Palette).map(color => (
          <Grid.Item size={1}>
            <Button
              color={color}
              type={ButtonType.secondary}
              icon={<IconAdd />}
            >Создать</Button>
          </Grid.Item>
        ))}
         <span>Default</span>
        {Object.values(Palette).map(color => (
          <Grid.Item size={1}>
            <Button
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
