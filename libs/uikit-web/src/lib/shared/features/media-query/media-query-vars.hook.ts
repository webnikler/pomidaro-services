import { useMemo } from 'react';
import { MediaQuery } from './media-query.enum';
import type { CSSVariableValueTransformer, MediaQueryProp, MediaQueryTypes } from './media-query.type';

const normalizeMeidaQueryProp = <T>(prop: MediaQueryProp<T>): MediaQueryTypes<T> => {
  if (typeof prop === 'number') {
    return {
      [MediaQuery.xs]: prop,
      [MediaQuery.sm]: prop,
      [MediaQuery.md]: prop,
      [MediaQuery.lg]: prop,
      [MediaQuery.xl]: prop,
    }
  }

  return prop as MediaQueryTypes<T> ?? {};
};

const transformer: CSSVariableValueTransformer<unknown> = v => v;

const useCSSVarsFromMediaQueryProp = <T>(
  cssVarsNamespace: string,
  cssVarsName: string,
  mediaQueryProp: MediaQueryProp<T> | undefined,
  transform: CSSVariableValueTransformer<T | unknown> = transformer,
) => {
  return useMemo(() => {
    const mqMap = normalizeMeidaQueryProp(mediaQueryProp);

    return {
      [`--${cssVarsNamespace}-${cssVarsName}-${MediaQuery.xs}`]: transform(mqMap[MediaQuery.xs]),
      [`--${cssVarsNamespace}-${cssVarsName}-${MediaQuery.sm}`]: transform(mqMap[MediaQuery.sm]),
      [`--${cssVarsNamespace}-${cssVarsName}-${MediaQuery.md}`]: transform(mqMap[MediaQuery.md]),
      [`--${cssVarsNamespace}-${cssVarsName}-${MediaQuery.lg}`]: transform(mqMap[MediaQuery.lg]),
      [`--${cssVarsNamespace}-${cssVarsName}-${MediaQuery.xl}`]: transform(mqMap[MediaQuery.xl]),
    };
  }, [
    cssVarsNamespace,
    cssVarsName,
    mediaQueryProp,
    transform,
  ]);
};

useCSSVarsFromMediaQueryProp.namespace = (cssVarsNamespace: string) => {
  return useCSSVarsFromMediaQueryProp.bind(null, cssVarsNamespace);
};

export { useCSSVarsFromMediaQueryProp };
