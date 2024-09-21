import type { Meta, StoryObj } from '@storybook/react';
import { Layout, LayoutPalette } from './Layout';
import { GridPresentation } from '../Grid/Grid.presentation';

type LayoutWithCustomArgs = React.ComponentProps<typeof Layout> & {
  isHideHeader: boolean;
  isHideSidebar: boolean;
  isHideSidebarHeader: boolean;
  isHideContentHeader: boolean;
  isShowLayoutContentGrid: boolean;
};

const meta: Meta<LayoutWithCustomArgs> = {
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
  render: ({
    isHideHeader,
    isHideSidebar,
    isHideSidebarHeader,
    isHideContentHeader,
    isShowLayoutContentGrid,
    ...args
  }) => (
    <Layout
      {...args}
      header={isHideHeader ? undefined : <Layout.Header />}
      sidebar={isHideSidebar ? undefined : <Layout.Sidebar />}
      sidebarHeader={isHideSidebarHeader ? undefined : <Layout.SidebarHeader />}
      contentHeader={isHideContentHeader ? undefined : <Layout.ContentHeader />}
    >
      { isShowLayoutContentGrid && <GridPresentation /> }
    </Layout>
  ),
};

export default meta;

type Story = StoryObj<LayoutWithCustomArgs>;

export const Base: Story = {
  argTypes: {
    palette: {
      options: Object.values(LayoutPalette),
      name: 'Палитра',
    },
    responsive: {
      name: 'Не ограничивать по ширине',
    },
    isShowLayoutContentGrid: {
      name: 'Показывать сетку',
    },
    isHideHeader: {
      name: 'Скрыть основную шапку'
    },
    isHideSidebar: {
      name: 'Скрыть боковое меню'
    },
    isHideSidebarHeader: {
      name: 'Скрыть шапку бокового меню'
    },
    isHideContentHeader: {
      name: 'Скрыть шапку контентной зоны'
    },
    header: {
      control: false,
    },
    sidebar: {
      control: false,
    },
    sidebarHeader: {
      control: false,
    },
    contentHeader: {
      control: false,
    },
  },
  args: {
    palette: LayoutPalette.LightBlue,
    isShowLayoutContentGrid: true,
    responsive: false,
    isHideHeader: false,
    isHideSidebar: false,
    isHideSidebarHeader: false,
    isHideContentHeader: false,
  },
};
