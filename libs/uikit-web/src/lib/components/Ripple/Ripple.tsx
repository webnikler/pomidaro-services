import type { RippleContainerComponent, RippleItem } from './Ripple.types';
import css from './Ripple.module.scss';
import { useLayoutEffect, useState } from 'react';

const useDebouncedRippleCleanUp = (rippleCount = 0, duration = 0, cleanUpFunction: () => void) => {
  useLayoutEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>|undefined = undefined;

    if (rippleCount > 0) {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        cleanUpFunction();
        clearTimeout(timeoutId);
      }, duration * 4);
    }

    return () => clearTimeout(timeoutId);
  }, [
    rippleCount,
    duration,
    cleanUpFunction,
  ]);
};

export const RippleContainer: RippleContainerComponent = ({
  color = 'rgba(255,255,255, .5)',
  duration = 1000,
}) => {
  const [ripples, setRipples] = useState<RippleItem[]>([]);

  useDebouncedRippleCleanUp(ripples.length, duration, () => {
    setRipples([]);
  });

  const addRipple = ({ clientX, clientY, currentTarget }: React.MouseEvent<HTMLElement>) => {
    const { width, height, x, y } = currentTarget.getBoundingClientRect();
    const size = width > height ? width : height;
    const newX = clientX - x - size / 2;
    const newY = clientY - y - size / 2;

    setRipples([...ripples, { x: newX, y: newY, size }]);
  };

  const styles = {
    '--ripple-color': color,
    '--ripple-duration': `${duration}ms`,
  } as React.CSSProperties;

  return (
    <div style={styles} className={css.RippleContainer} onMouseDown={addRipple}>
      {ripples.map(({ x, y, size } ,index) => (
        <span
          key={index}
          className={css.item}
          style={{ top: y, left: x, width: size, height: size }}
        />
      ))}
    </div>
  );
};
