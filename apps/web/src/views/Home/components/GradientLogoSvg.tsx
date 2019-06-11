import { Svg, SvgProps } from '@pancakeswap/uikit'

const GradientLogo: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 48 48" {...props}>
      <defs>
        <linearGradient id="paint0_linear" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7645D9" />
          <stop offset="1" stopColor="#5121B1" />
        </linearGradient>
      </defs>
    </Svg>
  )
}

export default GradientLogo
