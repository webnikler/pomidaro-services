import css from './Grid.module.scss';
import type { GridComponent, GridItemComponent } from './Grid.types';
import { useCSSVarsFromMediaQueryProp } from '@shared/features/media-query';
import { units } from '@shared/common/helpers';

export const Grid: GridComponent = ({
  gap,
  rowGap,
  columnGap,
  margins,
  columns,
  children,
  style,
  ...props
}) => {
  const useCssVars = useCSSVarsFromMediaQueryProp.namespace('grid');
  
  const styles = {
    ...useCssVars('margin', margins, units.px),
    ...useCssVars('row-gap', rowGap || gap, units.px),
    ...useCssVars('column-gap', columnGap || gap, units.px),
    ...useCssVars('columns', columns),
    ...style,
  } as React.CSSProperties;

  return (
    <div
      style={styles}
      className={css.Grid}
      {...props}>
      {children}
    </div>
  );
};

const Item: GridItemComponent = ({ children, size, style, ...props }) => {
  const useCssVars = useCSSVarsFromMediaQueryProp.namespace('grid-item');

  const styles = {
    ...useCssVars('size', size),
    ...style,
  } as React.CSSProperties;

  return (
    <section
      className={css.Item}
      style={styles}
      {...props}>
      {children}
    </section>
  );
};

Grid.Item = Item;

export default Grid;
