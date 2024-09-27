import type { Meta, StoryObj } from '@storybook/react';
import { Layout } from './Layout';
import { Sidebar } from './Sidebar/Sidebar';
import { Content } from './Content/Content';
import { useMediaQuery } from '@react-hook/media-query';
import Grid from '@components/Grid';
import type { ContentProps } from './Layout.types';
import { BREAKPOINT_LG_END, BREAKPOINT_MD_END, BREAKPOINTS } from '@shared/features/breakpoints';

const LayoutGrid = () => {
  const isXs = useMediaQuery(BREAKPOINTS.xs);
  const isSm = useMediaQuery(BREAKPOINTS.sm);
  const length = isXs ? 4 : isSm ? 8 : 12;

  return (
    <Grid columns={{ xs: 4, sm: 8, md: 12 }} style={{ height: '100%' }}>
      {Array.from({ length }).map((_, i) => (
        <Grid.Item size={1} key={i} style={{ background: 'rgba(184,184,184,.4)' }} />
      ))}
    </Grid>
  );
};

const meta: Meta = {
  title: 'Design system/Components/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    responsive: {
      name: 'Не ограничивать по ширине',
      table: {
        category: 'Настройки контентной зоны',
      },
    },
  },
  args: {
    responsive: false,
  },
};

export default meta;

type Story = StoryObj;

export const SidebarOnlyLeft: Story = {
  name: 'Только левый сайдбар',
  render: ({ responsive }: ContentProps) => {
    return (
      <Layout header={<Layout.Header />}>
        <Sidebar.Left fixedOnBreakpoint={BREAKPOINT_MD_END} header={<Sidebar.Header />} />
        <Content responsive={responsive} header={<Content.Header />}>
          <LayoutGrid />
        </Content>
      </Layout>
    );
  },
};

export const SidebarOnlyRight: Story = {
  name: 'Только правый сайдбар',
  render: ({ responsive }: ContentProps) => {
    return (
      <Layout header={<Layout.Header />}>
        <Sidebar.Right fixedOnBreakpoint={BREAKPOINT_MD_END} header={<Sidebar.Header />} />
        <Content responsive={responsive} header={<Content.Header />}>
          <LayoutGrid />
        </Content>
      </Layout>
    );
  },
};

export const SidebarsDuo: Story = {
  name: 'Левый и правый сайдбар',
  render: ({ responsive }: ContentProps) => {
    return (
      <Layout header={<Layout.Header />}>
        <Sidebar.Left fixedOnBreakpoint={BREAKPOINT_MD_END} header={<Sidebar.Header />} />
        <Content responsive={responsive} header={<Content.Header />}>
          <LayoutGrid />
        </Content>
        <Sidebar.Right fixedOnBreakpoint={BREAKPOINT_LG_END} header={<Sidebar.Header />} />
      </Layout>
    );
  },
};

export const SidebarsNone: Story = {
  name: 'Без сайдбаров',
  render: ({ responsive }: ContentProps) => {
    return (
      <Layout header={<Layout.Header />}>
        <Content responsive={responsive} header={<Content.Header />}>
          <LayoutGrid />
        </Content>
      </Layout>
    );
  },
};

export const OnlyHeader: Story = {
  name: 'Только шапка',
  render: ({ responsive }: ContentProps) => {
    return (
      <Layout header={<Layout.Header />}>
        <Content responsive={responsive}>
          <LayoutGrid />
        </Content>
      </Layout>
    );
  },
};

export const Emprty: Story = {
  name: 'Пустой',
  render: ({ responsive }: ContentProps) => {
    return (
      <Layout>
        <Content responsive={responsive}>
          <LayoutGrid />
        </Content>
      </Layout>
    );
  },
};

