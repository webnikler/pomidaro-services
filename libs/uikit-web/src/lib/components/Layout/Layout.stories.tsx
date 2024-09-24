import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Layout, Content, Sidebar } from '.';
import { GridPresentation } from '@components/Grid/Grid.presentation';
import { Palette } from '@shared/common/constants';
import { ThemeProvider } from '@providers/theme';
import { type LayoutPresentationProps } from './Layout.types';

const LayoutPresentation: React.FC<LayoutPresentationProps> = ({
  isShowHeader,
  isShowSidebar,
  isShowSidebarHeader,
  isShowContentHeader,
  isShowLayoutContentGrid,
  responsive,
  palette,
  isDark,
}) => {
  const sidebarHeader = isShowSidebarHeader && <Sidebar.Header />;
  const contentHeader = isShowContentHeader && <Content.Header />;
  const header = isShowHeader && <Layout.Header />;

  return (
    <ThemeProvider palette={palette} isDark={isDark}>
      <Layout header={header}>
        {isShowSidebar && <Sidebar left header={sidebarHeader} />}
        <Content responsive={responsive} header={contentHeader}>
          { isShowLayoutContentGrid && <GridPresentation /> }
        </Content>
        {isShowSidebar && <Sidebar right header={sidebarHeader} />}
      </Layout>
    </ThemeProvider>
  );
};

const meta: Meta<LayoutPresentationProps> = {
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
  render: props => <LayoutPresentation {...props} />,
};

export default meta;

type Story = StoryObj<LayoutPresentationProps>;

export const Base: Story = {
  name: 'Layout',
  argTypes: {
    palette: {
      options: Object.values(Palette),
      name: 'Палитра',
      control: 'select',
    },
    isDark: {
      name: 'Включить темную тему'
    },
    responsive: {
      name: 'Не ограничивать по ширине',
    },
    isShowLayoutContentGrid: {
      name: 'Показывать сетку',
    },
    isShowHeader: {
      name: 'Показывать основную шапку'
    },
    isShowSidebar: {
      name: 'Показывать боковое меню'
    },
    isShowSidebarHeader: {
      name: 'Показывать шапку бокового меню'
    },
    isShowContentHeader: {
      name: 'Показывать шапку контентной зоны'
    },
  },
  args: {
    palette: Palette.LightBlue,
    isDark: false,
    isShowLayoutContentGrid: true,
    responsive: false,
    isShowHeader: true,
    isShowSidebar: true,
    isShowSidebarHeader: true,
    isShowContentHeader: true,
  },
};
