import PropTypes from 'prop-types';
import cn from 'classnames';
import css from './Grid.module.scss';
import { GridComponent } from './Grid.types';
import { toPixels } from '@shared/helpers';

const COLUMN_GAP_CSS_VAR = '--gridColumnGap';
const ROW_GAP_CSS_VAR = '--gridRowGap';

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
  col: PropTypes.oneOf([1,2,3,4,5,6,7,8,9,10,11,12]),
};

export default Grid;
