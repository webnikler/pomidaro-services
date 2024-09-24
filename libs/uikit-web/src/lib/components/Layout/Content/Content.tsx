import css from './Content.module.scss';
import type { ContentComponent, ContentHeaderComponent } from '../Layout.types';
import cn from 'classnames';
import { useTheme } from '@providers/theme/theme.provider';
import { CONTENT_COLORS } from './Content.const';

const Content: ContentComponent = ({
  header,
  children,
  style,
  responsive = false,
}) => {
  const { palette } = useTheme();
  const className = cn(css.Content, {
    [css.responsive]: responsive,
  });

  const styles = {
    '--content-fill': CONTENT_COLORS[palette].fill,
    ...style,
  } as React.CSSProperties;

  return (
    <section style={styles} className={className}>
      {header}
      <main>
        {children}
      </main>
    </section>
  );
};

const Header: ContentHeaderComponent = ({ children }) => {
  return (
    <header className={css.Header}>
      {children}
    </header>
  );
};

Content.Header = Header;

export { Content };
