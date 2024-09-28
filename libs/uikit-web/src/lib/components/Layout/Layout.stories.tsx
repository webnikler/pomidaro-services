import type { Meta, StoryObj } from '@storybook/react';
import { Layout } from './Layout';
import { Sidebar } from './Sidebar/Sidebar';
import { Content } from './Content/Content';
import { useMediaQuery } from '@react-hook/media-query';
import { Grid } from '@components/Grid';
import { SidebarPlacement, type ContentProps } from './Layout.types';
import { BREAKPOINT_LG_END, BREAKPOINT_MD_END, BREAKPOINTS } from '@shared/features/breakpoints';
import { SidebarProvider, useSidebar } from './Sidebar/Sidebar.provider';
import { IconArrowBack, IconArrowForward } from '@components/Icon';
import { Button } from '@components/Button/Button';
import { ButtonType } from '@components/Button/Button.types';

const LayoutGrid = () => {
  const isXs = useMediaQuery(BREAKPOINTS.xs);
  const isSm = useMediaQuery(BREAKPOINTS.sm);
  const length = isXs ? 4 : isSm ? 8 : 12;

  return (
    <Grid
      columns={{ xs: 4, sm: 8, md: 12 }}
      style={{ height: '100%' }}
    >
      {Array.from({ length }).map((_, i) => (
        <Grid.Item
          style={{ background: 'rgba(184,184,184,.4)' }}
          size={1}
          key={i}
        />
      ))}
    </Grid>
  );
};

const SidebarController = ({ placement = SidebarPlacement.left }) => {
  const { hidden, fixed, setHidden } = useSidebar(placement);
  const toLeft = <Button type={ButtonType.secondary} icon={<IconArrowBack />} />;
  const toRight = <Button type={ButtonType.secondary} icon={<IconArrowForward />} />;

  return (
    fixed &&
      <div
        style={{ float: placement, padding: '9px' }}
        onClick={() => setHidden(h => !h)}
      >
        {
          placement === SidebarPlacement.left
            ? hidden
              ? toRight
              : toLeft
            : hidden
              ? toLeft
              : toRight
        }
      </div>
  );
};

SidebarController.Left = () => <SidebarController placement={SidebarPlacement.left} />;
SidebarController.Right = () => <SidebarController placement={SidebarPlacement.right} />;

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
  render: ({ responsive }: ContentProps) => (
    <SidebarProvider>
      <Layout header={
        <Layout.Header>
          <SidebarController.Left />
        </Layout.Header>
      }>
        <Sidebar.Left
          fixedOnBreakpoint={BREAKPOINT_MD_END}
          header={<Sidebar.Header />}
        />
        <Content
          responsive={responsive}
          header={<Content.Header />}
        >
          <LayoutGrid />
        </Content>
      </Layout>
    </SidebarProvider>
  ),
};

export const SidebarOnlyRight: Story = {
  name: 'Только правый сайдбар',
  render: ({ responsive }: ContentProps) => (
    <SidebarProvider>
      <Layout header={
        <Layout.Header>
          <SidebarController.Right />
        </Layout.Header>
      }>
        <Sidebar.Right
          fixedOnBreakpoint={BREAKPOINT_MD_END}
          header={<Sidebar.Header />}
        />
        <Content
          responsive={responsive}
          header={<Content.Header
        />}>
          <LayoutGrid />
        </Content>
      </Layout>
    </SidebarProvider>
  ),
};

export const SidebarsDuo: Story = {
  name: 'Левый и правый сайдбар',
  render: ({ responsive }: ContentProps) => (
    <SidebarProvider>
      <Layout header={
        <Layout.Header>
          <SidebarController.Left />
          <SidebarController.Right />
        </Layout.Header>
      }>
        <Sidebar.Left
          fixedOnBreakpoint={BREAKPOINT_MD_END}
          header={<Sidebar.Header />}
        />
        <Content
          responsive={responsive}
          header={<Content.Header />}
        >
          <LayoutGrid />
        </Content>
        <Sidebar.Right
          fixedOnBreakpoint={BREAKPOINT_LG_END}
          header={<Sidebar.Header />}
        />
      </Layout>
    </SidebarProvider>
  ),
};

export const SidebarsNone: Story = {
  name: 'Без сайдбаров',
  render: ({ responsive }: ContentProps) => (
    <Layout header={<Layout.Header />}>
      <Content
        responsive={responsive}
        header={<Content.Header />}
      >
        <LayoutGrid />
      </Content>
    </Layout>
  ),
};

export const OnlyHeader: Story = {
  name: 'Только шапка',
  render: ({ responsive }: ContentProps) => (
    <Layout header={<Layout.Header />}>
      <Content responsive={responsive}>
        <LayoutGrid />
      </Content>
    </Layout>
  ),
};

export const Emprty: Story = {
  name: 'Пустой',
  render: ({ responsive }: ContentProps) => (
    <Layout>
      <Content responsive={responsive}>
        <LayoutGrid />
      </Content>
    </Layout>
  ),
};
