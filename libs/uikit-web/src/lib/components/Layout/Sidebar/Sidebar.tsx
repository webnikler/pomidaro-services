import css from './Sidebar.module.scss';
import { SidebarPlacement, type SidebarComponent, type SidebarHeaderComponent, type SidebarProps } from '../Layout.types';
import { useTheme } from '@providers/theme/theme.provider';
import { HEADER_COLORS, SIDEBAR_COLORS } from './Sidebar.const';
import cn from 'classnames';
import { useEffect } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import { BREAKPOINT_XS_END } from '@shared/features/breakpoints';
import { useSidebar } from './Sidebar.provider';

const Sidebar: SidebarComponent = ({
  header,
  children,
  style,
  placement = SidebarPlacement.left,
  fixedOnBreakpoint = BREAKPOINT_XS_END,
}) => {
  const { palette } = useTheme();
  const { hidden, setHidden, setFixed } = useSidebar(placement);
  const fixed = useMediaQuery(fixedOnBreakpoint);

  useEffect(() => {
    fixed && setHidden(true);
    setFixed(fixed);
  }, [fixed, setHidden, setFixed]);

  const className = cn(css.Sidebar, css[placement], {
    [css.fixed]: fixed,
    [css.hidden]: hidden,
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

const Left = (props: SidebarProps) => <Sidebar {...props} placement={SidebarPlacement.left} />;
const Right = (props: SidebarProps) => <Sidebar {...props} placement={SidebarPlacement.right} />;

Sidebar.Header = Header;
Sidebar.Left = Left;
Sidebar.Right = Right;

export { Sidebar };
