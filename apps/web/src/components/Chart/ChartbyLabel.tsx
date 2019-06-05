import { Flex, FlexProps, Link, Text, LinkProps } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'

export const ChartByLabel = ({
  symbol,
  link,
  by,
  linkProps,
  ...props
}: { symbol: string; link: string; by: string; linkProps?: LinkProps } & FlexProps) => {
}
