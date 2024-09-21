import PropTypes from 'prop-types';
import cn from 'classnames';
import css from './Grid.module.scss';
import { GridComponent } from './Grid.types';

const COLUMN_GAP_CSS_VAR = '--gridColumnGap';
const ROW_GAP_CSS_VAR = '--gridRowGap';

const toPixels = (value?: number) => value && value + 'px';

export const Grid: GridComponent = ({
  children,
  rowGap,
  columnGap,
  style,
  ...props
}) => {
  const styles = {
    [COLUMN_GAP_CSS_VAR]: toPixels(columnGap),
    [ROW_GAP_CSS_VAR]: toPixels(rowGap),
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

Grid.propTypes = {
  rowGap: PropTypes.number,
  columnGap: PropTypes.number,
};

Grid.Item = ({ children, col = 12, ...props }) => (
  <section className={cn(css.GridItem, css[`col-${col}`])} {...props}>{children}</section>
);

Grid.Item.propTypes = {
  col: PropTypes.number,
};

export default Grid;
