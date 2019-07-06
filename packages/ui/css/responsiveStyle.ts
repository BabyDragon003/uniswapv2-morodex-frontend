import { StyleRule } from '@vanilla-extract/css'
import { Breakpoint, breakpoints } from './breakpoints'

type CSSProps = Omit<StyleRule, '@media' | '@supports'>

const makeMediaQuery = (breakpoint: Breakpoint) => (styles?: CSSProps) =>
  !styles || Object.keys(styles).length === 0
    ? {}
    : {
        [`screen and (min-width: ${breakpoints[breakpoint]}px)`]: styles,
      }

const mediaQuery = {
  sm: makeMediaQuery('sm'),
  md: makeMediaQuery('md'),
  lg: makeMediaQuery('lg'),
  xl: makeMediaQuery('xl'),
  xxl: makeMediaQuery('xxl'),
}

type ResponsiveStyle = {
  xs?: CSSProps
  sm?: CSSProps
  md?: CSSProps
  lg?: CSSProps
