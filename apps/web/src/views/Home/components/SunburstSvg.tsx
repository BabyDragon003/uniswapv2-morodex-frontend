import { Svg, SvgProps } from '@pancakeswap/uikit'

const SunburstSvg: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 1956 1956" {...props}>
      </g>
      <defs>
        <filter
          id="filter0_f"
          x="0"
          y="0"
          width="1956"
          height="1956"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur" />
        </filter>
        <radialGradient
          id="paint0_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(978 978) rotate(90) scale(958)"
        >
          <stop offset="0.114547" stopColor="white" stopOpacity="0" />
          <stop offset="0.374975" stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>
    </Svg>
  )
}

export default SunburstSvg
