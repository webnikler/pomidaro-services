import { Breakpoints } from './breakpoints.enum';

// XS
export const BREAKPOINT_XS_START = '(min-width: 0px)';
export const BREAKPOINT_XS_END = '(max-width: 599px)';
// SM
export const BREAKPOINT_SM_START = '(min-width: 600px)';
export const BREAKPOINT_SM_END = '(max-width: 904px)';
// MD
export const BREAKPOINT_MD_STRAT = '(min-width: 905px)';
export const BREAKPOINT_MD_END = '(max-width: 1239px)';
// LG
export const BREAKPOINT_LG_START = '(min-width: 1240px)';
export const BREAKPOINT_LG_END = '(max-width: 1439px)';
// XL
export const BREAKPOINT_XL_START = '(min-width: 1440px)';

export const BREAKPOINTS = {
  [Breakpoints.xs]: `${BREAKPOINT_XS_START} and ${BREAKPOINT_XS_END}`,
  [Breakpoints.sm]: `${BREAKPOINT_SM_START} and ${BREAKPOINT_SM_END}`,
  [Breakpoints.md]: `${BREAKPOINT_MD_STRAT} and ${BREAKPOINT_MD_END}`,
  [Breakpoints.lg]: `${BREAKPOINT_LG_START} and ${BREAKPOINT_LG_END}`,
  [Breakpoints.xl]: BREAKPOINT_XL_START,
};
