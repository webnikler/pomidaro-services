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
  isLeftSidebarFixed,
  isRightSidebarFixed,
  isLeftSidebarHidden,
  isRightSidebarHidden,
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
      <Layout header={isShowHeader && <Layout.Header />}>
        {
          isShowLeftSidebar &&
            <Sidebar.Left
              header={isShowLeftSidebarHeader && <Sidebar.Header />}
              hidden={isLeftSidebarHidden}
              fixed={isLeftSidebarFixed}
              width={leftSidebarWidth}
            />
        }
        <Content
          responsive={responsive}
          header={isShowContentHeader && <Content.Header />}
        >
          {isShowLayoutContentGrid && <GridPresentation />}
        </Content>
        {
          isShowRightSidebar &&
            <Sidebar.Right
              header={isShowRightSidebarHeader && <Sidebar.Header />}
              hidden={isRightSidebarHidden}
              fixed={isRightSidebarFixed}
              width={rightSidebarWidth}
            />
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
      table: {
        category: 'Темизация',
      },
    },
    isDark: {
      name: 'Включить темную тему',
      table: {
        category: 'Темизация',
      },
    },
    responsive: {
      name: 'Не ограничивать по ширине',
      table: {
        category: 'Настройки контентной зоны',
      },
    },
    isShowLayoutContentGrid: {
      name: 'Показать сетку',
      table: {
        category: 'Настройки контентной зоны',
      },
    },
    isShowHeader: {
      name: 'Включить шапку',
      table: {
        category: 'Настройки лейаута',
      },
    },
    leftSidebarWidth: {
      name: 'Ширина сайдбара',
      control: {
        type: 'range',
        min: 200,
        max: 320,
      },
      table: {
        category: 'Настройки левого сайдбара',
      },
    },
    rightSidebarWidth: {
      name: 'Ширина сайдбара',
      control: {
        type: 'range',
        min: 200,
        max: 320,
      },
      table: {
        category: 'Настройки правого сайдбара',
      },
    },
    isLeftSidebarFixed: {
      name: 'Сайдбар откреплен от лейаута',
      table: {
        category: 'Настройки левого сайдбара',
      },
    },
    isRightSidebarFixed: {
      name: 'Сайдбар откреплен от лейаута',
      table: {
        category: 'Настройки правого сайдбара',
      },
    },
    isLeftSidebarHidden: {
      name: 'Сайдбар свернут (должен быть откреплен)',
      table: {
        category: 'Настройки левого сайдбара',
      },
    },
    isRightSidebarHidden: {
      name: 'Сайдбар свернут (должен быть откреплен)',
      table: {
        category: 'Настройки правого сайдбара',
      },
    },
    isShowLeftSidebar: {
      name: 'Включить сайдбар',
      table: {
        category: 'Настройки левого сайдбара',
      },
    },
    isShowLeftSidebarHeader: {
      name: 'Включить шапку',
      table: {
        category: 'Настройки левого сайдбара',
      },
    },
    isShowRightSidebar: {
      name: 'Включить сайдбар',
      table: {
        category: 'Настройки правого сайдбара',
      },
    },
    isShowRightSidebarHeader: {
      name: 'Включить шапку',
      table: {
        category: 'Настройки правого сайдбара',
      },
    },
    isShowContentHeader: {
      name: 'Включить шапку',
      table: {
        category: 'Настройки контентной зоны',
      }
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
    isLeftSidebarFixed: false,
    isRightSidebarFixed: false,
    isLeftSidebarHidden: false,
    isRightSidebarHidden: false,
    isShowLeftSidebar: true,
    isShowLeftSidebarHeader: true,
    isShowRightSidebar: true,
    isShowRightSidebarHeader: true,
    isShowContentHeader: true,
  },
};
