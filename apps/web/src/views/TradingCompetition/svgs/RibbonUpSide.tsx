import { Svg, SvgProps } from '@pancakeswap/uikit'

const RibbonUpSide: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 32 64" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5013 0C4.65815 0 -0.670819 5.93959 0.0686475 12.7427C0.423944 16.0114 2.12624 18.8364 4.58664 20.6892C5.51702 21.3899 6.24525 22.3678 6.40046 23.5221C6.56956 24.7797 6.02972 26.0056 5.19007 26.957C3.15098 29.2675 2.04171 32.3907 2.38086 35.7068C2.97882 41.5536 7.90322 46 13.7805 46H18.4336V0H11.5013Z"
        fill="#3B2070"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M27 18H20V11C20 14.866 23.134 18 27 18Z" fill="#7645D9" />
      <path
        d="M27 18C23.134 18 20 14.866 20 11C20 8.23858 22.2386 6 25 6H27C27.5523 6 28 5.55229 28 5C28 3.34315 26.6569 2 25 2H18V0H25C27.7614 0 30 2.23858 30 5C30 6.65685 28.6569 8 27 8H25C23.3431 8 22 9.34315 22 11C22 13.7614 24.2386 16 27 16H32V18H27Z"
        fill="#3B2070"
      />
    </Svg>
  )
}

export default RibbonUpSide
