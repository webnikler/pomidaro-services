import { MediaQuery } from './media-query.enum';

export type MediaQueryTypes<T> = {
  [MediaQuery.xs]?: T;
  [MediaQuery.sm]?: T;
  [MediaQuery.md]?: T;
  [MediaQuery.lg]?: T;
  [MediaQuery.xl]?: T;
};

export type MediaQueryProp<T> = MediaQueryTypes<T> | T;

export type CSSVariableValueTransformer<T> = (value?: T) => T | string | undefined;
