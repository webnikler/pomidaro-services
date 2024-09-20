import type { Meta, StoryObj } from '@storybook/react';
import { Layout, LayoutPalette } from './Layout';

type LayoutWithCustomArgs = React.ComponentProps<typeof Layout> & {
  isHideHeader: boolean;
  isHideSidebar: boolean;
  isHideSidebarHeader: boolean;
  isHideContentHeader: boolean;
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
    ...args
  }) => (
    <Layout
      {...args}
      header={isHideHeader ? undefined : <Layout.Header />}
      sidebar={isHideSidebar ? undefined : <Layout.Sidebar />}
      sidebarHeader={isHideSidebarHeader ? undefined : <Layout.SidebarHeader />}
      contentHeader={isHideContentHeader ? undefined : <Layout.ContentHeader />}
    />
  ),
};

export default meta;

type Story = StoryObj<LayoutWithCustomArgs>;

export const Base: Story = {
  argTypes: {
    palette: {
      options: Object.values(LayoutPalette),
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
    isHideHeader: false,
    isHideSidebar: false,
    isHideSidebarHeader: false,
    isHideContentHeader: false,
  },
};
