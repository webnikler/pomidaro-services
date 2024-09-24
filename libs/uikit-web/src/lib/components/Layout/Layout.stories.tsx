import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Layout, Content, Sidebar } from '.';
import { GridPresentation } from '@components/Grid/Grid.presentation';
import { Palette } from '@shared/common/constants';
import { ThemeProvider } from '@providers/theme';
import { type LayoutPresentationProps } from './Layout.types';

const LayoutPresentation: React.FC<LayoutPresentationProps> = ({
  isShowHeader,
  leftSidebarWidth,
  rightSidebarWidth,
  isShowLeftSidebar,
  isShowLeftSidebarHeader,
  isShowRightSidebar,
  isShowRightSidebarHeader,
  isShowContentHeader,
  isShowLayoutContentGrid,
  responsive,
  palette,
  isDark,
}) => {
  return (
    <ThemeProvider palette={palette} isDark={isDark}>
      <Layout header={
        isShowHeader && <Layout.Header />
      }>
        {
          isShowLeftSidebar && <Sidebar.Left width={leftSidebarWidth} header={
            isShowLeftSidebarHeader && <Sidebar.Header />
          } />
        }
        <Content responsive={responsive} header={
          isShowContentHeader && <Content.Header />
        }>
          {
            isShowLayoutContentGrid && <GridPresentation />
          }
        </Content>
        {
          isShowRightSidebar && <Sidebar.Right width={rightSidebarWidth} header={
            isShowRightSidebarHeader && <Sidebar.Header />
          } />
        }
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
      name: 'Включить темную тему',
    },
    responsive: {
      name: 'Не ограничивать по ширине',
    },
    isShowLayoutContentGrid: {
      name: 'Показывать сетку',
    },
    isShowHeader: {
      name: 'Показывать основную шапку',
    },
    leftSidebarWidth: {
      name: 'Ширина левого сайдбара',
      control: {
        type: 'range',
        min: 200,
        max: 320,
      },
    },
    rightSidebarWidth: {
      name: 'Ширина правого сайдбара',
      control: {
        type: 'range',
        min: 200,
        max: 320,
      },
    },
    isShowLeftSidebar: {
      name: 'Показывать левое боковое меню',
    },
    isShowLeftSidebarHeader: {
      name: 'Показывать шапку левого бокового меню',
    },
    isShowRightSidebar: {
      name: 'Показывать правое боковое меню',
    },
    isShowRightSidebarHeader: {
      name: 'Показывать шапку правого бокового меню',
    },
    isShowContentHeader: {
      name: 'Показывать шапку контентной зоны',
    },
  },
  args: {
    palette: Palette.LightBlue,
    isDark: false,
    isShowLayoutContentGrid: true,
    responsive: false,
    isShowHeader: true,
    leftSidebarWidth: 320,
    rightSidebarWidth: 200,
    isShowLeftSidebar: true,
    isShowLeftSidebarHeader: true,
    isShowRightSidebar: true,
    isShowRightSidebarHeader: true,
    isShowContentHeader: true,
  },
};
