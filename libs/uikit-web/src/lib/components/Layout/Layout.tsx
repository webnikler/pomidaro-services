import css from './Layout.module.scss';
import type { LayoutComponent, LayoutHeaderComponent } from './Layout.types';
import { useTheme } from '@providers/theme/theme.provider';
import { HEADER_COLORS } from './Layout.const';

const Layout: LayoutComponent = ({ children, header }) => {
  return (
    <main className={css.Layout}>
      {header}
      {children}
    </main>
  );
};

const Header: LayoutHeaderComponent = ({ children, style }) => {
  const { palette } = useTheme();

  const styles = {
    '--layout-header-fill': HEADER_COLORS[palette].fill,
    '--layout-header-stroke': HEADER_COLORS[palette].stroke,
    ...style,
  } as React.CSSProperties;

  return (
    <header style={styles} className={css.Header}>
      {children}
    </header>
  );
};

Layout.Header = Header;

export { Layout };
