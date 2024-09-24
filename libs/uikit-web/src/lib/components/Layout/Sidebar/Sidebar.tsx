import css from './Sidebar.module.scss';
import type { SidebarComponent, SidebarHeaderComponent } from '../Layout.types';
import { useTheme } from '@providers/theme/theme.provider';
import { HEADER_COLORS, SIDEBAR_COLORS } from './Sidebar.const';
import cn from 'classnames';

const Sidebar: SidebarComponent = ({
  header,
  children,
  style,
  right = false,
  left = true,
}) => {
  const { palette } = useTheme();
  const className = cn(css.Sidebar, {
    [css.right]: right,
    [css.left]: left,
  });

  const styles = {
    '--sidebar-fill': SIDEBAR_COLORS[palette].fill,
    '--sidebar-stroke': SIDEBAR_COLORS[palette].stroke,
    ...style,
  } as React.CSSProperties;

  return (
    <aside style={styles} className={className}>
      {header}
      {children}
    </aside>
  );
};

const Header: SidebarHeaderComponent = ({ children, style }) => {
  const { palette } = useTheme();

  const styles = {
    '--sidebar-header-fill': HEADER_COLORS[palette].fill,
    '--sidebar-header-stroke': HEADER_COLORS[palette].stroke,
    ...style,
  } as React.CSSProperties;

  return (
    <header style={styles} className={css.Header}>
      {children}
    </header>
  );
};

Sidebar.Header = Header;

export { Sidebar };
