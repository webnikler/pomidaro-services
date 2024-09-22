import { MediaQuery } from './media-query.enum';

export const MEDIA_QUERIES = {
  [MediaQuery.xs]: '(max-width: 599px)',
  [MediaQuery.sm]: '(min-width: 600px) and (max-width: 904px)',
  [MediaQuery.md]: '(min-width: 905px) and (max-width: 1239px)',
  [MediaQuery.lg]: '(min-width: 1240) and (max-width: 1439px)',
  [MediaQuery.xl]: '(min-width: 1440px)',
};
