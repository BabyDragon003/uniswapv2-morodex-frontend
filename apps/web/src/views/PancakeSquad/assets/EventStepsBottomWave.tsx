import * as React from 'react'
import { Svg, SvgProps } from '@pancakeswap/uikit'

const Icon: React.FC<React.PropsWithChildren<SvgProps & { isDark: boolean }>> = ({ isDark, ...props }) => {
  return (
        <linearGradient id="squad_event_steps_bottom_wave" gradientUnits="userSpaceOnUse">
          <stop stopColor={isDark ? '#313D5C' : '#FAF9FA'} />
          <stop offset="1" stopColor={isDark ? '#3D2A54' : '#d7caec'} />
        </linearGradient>
      </defs>
    </Svg>
  )
}

export default Icon
