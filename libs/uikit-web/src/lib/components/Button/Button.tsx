import cn from 'classnames';
import { ButtonComponent, ButtonSize, ButtonType } from './Button.types';
import css from './Button.module.scss';
import { useTheme } from '@providers/theme/theme.provider';

export const Button: ButtonComponent = ({
  children,
  icon,
  color,
  size = ButtonSize.md,
  type = ButtonType.default,
  disabled = false,
}) => {
  const { palette } = useTheme();
  const className = cn(css.Button, [
    css[color || palette],
    css[size],
    css[type],
  ], {
    [css.rectangular]: children,
    [css.round]: !children,
  });

  return (
    <button disabled={disabled} className={className}>
      {icon}
      <span className={css.content}>{children}</span>
    </button>
  );
};
