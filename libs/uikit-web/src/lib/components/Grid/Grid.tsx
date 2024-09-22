import cn from 'classnames';
import css from './Grid.module.scss';
import type { GridComponent } from './Grid.types';
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

Grid.Item = ({ children, col = 12, ...props }) => (
  <section className={cn(css.GridItem, css[`size-${col}`])} {...props}>{children}</section>
);

export default Grid;
