import { Svg, SvgProps } from '@pancakeswap/uikit'

const TicketCard: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 296 121" {...props}>
      <g filter="url(#filter0_dd_ticket_purchase_card)">
        <path d="M4 16C4 7.16344 11.1634 0 20 0H66V113H20C11.1634 113 4 105.837 4 97V16Z" fill="#A881FC" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path d="M90 0H276C284.837 0 292 7.16344 292 16V97C292 105.837 284.837 113 276 113H90V0Z" fill="#A881FC" />
      </g>
      <defs>
        <filter
          id="filter0_dd_ticket_purchase_card"
          x="0"
          y="0"
          width="296"
          height="121"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="2" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.637669 0 0 0 0 0.458333 0 0 0 0 1 0 0 0 1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_ticket_purchase_card" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_ticket_purchase_card"
            result="effect2_dropShadow_ticket_purchase_card"
          />
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_ticket_purchase_card" result="shape" />
        </filter>
      </defs>
    </Svg>
  )
}

export default TicketCard
