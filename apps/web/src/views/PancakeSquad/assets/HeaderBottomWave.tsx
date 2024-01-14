import { Svg, SvgProps } from '@pancakeswap/uikit'
import * as React from 'react'

const Icon: React.FC<React.PropsWithChildren<SvgProps & { isDark: boolean }>> = ({ isDark, ...props }) => {
  return (
    <Svg viewBox="0 0 1280 16" preserveAspectRatio="none" {...props}>
      <path
        d="M0 16V0c159.43 9.206 387.163 14.966 640 14.966S1120.57 9.206 1280 0v16H0z"
        fill="url(#squad_header_bottom_wave)"
      />
      <defs>
        <linearGradient
          id="squad_header_bottom_wave"
          x1={174.5}
          y1={15.999}
