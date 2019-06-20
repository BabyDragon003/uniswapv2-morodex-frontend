import { Svg, SvgProps } from '@pancakeswap/uikit'

const WhiteBunny: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 27 26" {...props}>
      <mask
        id="white-bunny-path-1-outside-1"
        maskUnits="userSpaceOnUse"
        x="0.5"
        y="-0.0263672"
        width="26"
        height="26"
        fill="black"
      >
        <rect fill="white" x="0.5" y="-0.0263672" width="26" height="26" />
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.909 3.56941C7.03125 1.79519 8.76206 0.588231 10.4692 1.08677C11.9461 1.51808 12.7937 3.06497 12.3624 4.54184L11.1683 8.63073C11.9225 8.53996 12.7022 8.49237 13.5 8.49237C14.6339 8.49237 15.731 8.58848 16.7708 8.76808L18.74 2.99564C19.2367 1.53947 20.8199 0.761724 22.2761 1.25849C23.9593 1.83269 24.6807 3.81559 23.7601 5.3372L20.9057 10.0551C23.7031 11.3976 25.5 13.4834 25.5 15.8257C25.5 19.8758 20.1274 23.159 13.5 23.159C6.87258 23.159 1.5 19.8758 1.5 15.8257C1.5 13.379 3.46066 11.2122 6.47417 9.88004L6.909 3.56941Z"
        fill="white"
      />
      <ellipse cx="10.4334" cy="15.292" rx="1.33333" ry="2" fill="#08060B" />
      <ellipse cx="19.6331" cy="15.292" rx="1.33333" ry="2" fill="#08060B" />
    </Svg>
  )
}

export default WhiteBunny
