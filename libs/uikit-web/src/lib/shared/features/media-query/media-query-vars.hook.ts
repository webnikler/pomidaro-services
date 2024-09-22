import { useMemo } from 'react';
import { MediaQuery } from './media-query.enum';
import type { CSSVariableValueTransformer, MediaQueryProp, MediaQueryTypes } from './media-query.type';

const parseNumber = <T>(prop: T): MediaQueryTypes<T> => ({
  [MediaQuery.xs]: prop,
  [MediaQuery.sm]: prop,
  [MediaQuery.md]: prop,
  [MediaQuery.lg]: prop,
  [MediaQuery.xl]: prop,
});

const parseObject = <T>({ xs, sm, md, lg, xl }: MediaQueryTypes<T>): MediaQueryTypes<T> => ({
  [MediaQuery.xl]: xl ?? lg ?? md ?? sm ?? xs,
  [MediaQuery.lg]: lg ?? md ?? sm ?? xs,
  [MediaQuery.md]: md ?? sm ?? xs,
  [MediaQuery.sm]: sm ?? xs,
  [MediaQuery.xs]: xs,
});

const normalizeProp = <T>(prop: MediaQueryProp<T>): MediaQueryTypes<T> => {
  switch (typeof prop) {
    case 'number': return parseNumber(prop);
    case 'object': return prop ? parseObject(prop) : {};
    default: return {};
  }
};

const transformer: CSSVariableValueTransformer<unknown> = v => v;

const useCSSVarsFromMediaQueryProp = <T>(
  cssVarsNamespace: string,
  cssVarsName: string,
  mediaQueryProp: MediaQueryProp<T> | undefined,
  transform: CSSVariableValueTransformer<T | unknown> = transformer,
) => {
  return useMemo(() => {
    const mqMap = normalizeProp(mediaQueryProp);

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
