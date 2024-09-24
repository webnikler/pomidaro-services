import css from './Sidebar.module.scss';
import type { SidebarComponent, SidebarHeaderComponent, SidebarProps } from '../Layout.types';
import { useTheme } from '@providers/theme/theme.provider';
import { HEADER_COLORS, SIDEBAR_COLORS } from './Sidebar.const';
import cn from 'classnames';
import { useCSSVarsFromMediaQueryProp } from '@shared/features/media-query';
import { units } from '@shared/common/helpers';

const Sidebar: SidebarComponent = ({
  header,
  children,
  style,
  width,
  fixed = true,
  hidden = false,
  placement = 'left',
}) => {
  const { palette } = useTheme();
  const useMediaQueryVars = useCSSVarsFromMediaQueryProp.namespace('sidebar');
  const className = cn(css.Sidebar, css[placement], {
    [css.fixed]: fixed,
    [css.hidden]: hidden,
  });
  

  const styles = {
    '--sidebar-fill': SIDEBAR_COLORS[palette].fill,
    '--sidebar-stroke': SIDEBAR_COLORS[palette].stroke,
    ...useMediaQueryVars('width', width, units.px),
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

const Left = (props: SidebarProps) => <Sidebar {...props} placement='left' />;
const Right = (props: SidebarProps) => <Sidebar {...props} placement='right' />;

Sidebar.Header = Header;
Sidebar.Left = Left;
Sidebar.Right = Right;

export { Sidebar };
