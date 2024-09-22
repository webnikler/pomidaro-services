import css from './Layout.module.scss';
import cn from 'classnames';
import { type LayoutComponent, LayoutPalette } from './Layout.types';

export const Layout: LayoutComponent = ({
  children,
  header,
  sidebar,
  sidebarHeader,
  contentHeader,
  responsive = false,
  palette = LayoutPalette.LightBlue,
}) => (
  <main className={cn(css.Layout, css[LayoutPalette[palette]])}>
    {header}
    <section className={css.body}>
      <aside className={css.aside}>
        {sidebarHeader}
        {sidebar}
      </aside>
      <Layout.Content header={contentHeader} responsive={responsive}>
        {children}
      </Layout.Content>
    </section>
  </main>
);

Layout.Header = ({ children }) => (
  <header className={css.Header}>{children}</header>
);

Layout.Content = ({ children, header, responsive }) => (
  <main className={css.Content}>
    {header}
    <div className={cn(css.contentWrapper, { [css.responsive]: responsive })}>{children}</div>
  </main>
);

Layout.ContentHeader = ({ children }) => (
  <header className={css.ContentHeader}>{children}</header>
);

Layout.Sidebar = ({ children }) => (
  <section className={css.Sidebar}>{children}</section>
);

Layout.SidebarHeader = ({ children }) => (
  <header className={css.SidebarHeader}>{children}</header>
);

export default Layout;
export { LayoutPalette };
