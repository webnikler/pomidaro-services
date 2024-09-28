import { RippleComponent } from './Ripple.types';
import css from './Ripple.module.scss';
import { useLayoutEffect } from 'react';

const useRipple = (rippleCount = 0, duration = 0, onCleanUp: () => void) => {
  useLayoutEffect(() => {
    let timerId: ReturnType<typeof setTimeout>|undefined = undefined;

    if (rippleCount > 0) {
      clearTimeout(timerId);

      timerId = setTimeout(() => {
        onCleanUp();
        clearTimeout(timerId);
      });
    }

    return () => clearTimeout(timerId);
  }, [
    rippleCount,
    duration,
    onCleanUp,
  ]);
};

export const Ripple: RippleComponent = ({
  color = '#CCCCCC',
  duration = 300,
}) => {
  const styles = {
    '--ripple-color': color,
    '--ripple-duration': `${duration}ms`,
  } as React.CSSProperties;

  return (
    <div style={styles} className={css.Ripple}>
      <span className={css.item}>1</span>
      <span className={css.item}>2</span>
    </div>
  );
};
