import { ReactNode } from 'react'
import { Box, Flex, HelpIcon, CardHeader, CardBody, Text, useTooltip } from '@pancakeswap/uikit'

import { StyledCard } from '../IfoCardStyles'
import { CardConfigReturn } from './types'

interface GenericIfoCardElements {
  action: ReactNode
  content: ReactNode
}

const GenericIfoCard: React.FC<React.PropsWithChildren<CardConfigReturn & GenericIfoCardElements>> = ({
  title,
  variant,
  action,
  content,
  tooltip,
}) => {
  const { targetRef, tooltip: tooltipMsg, tooltipVisible } = useTooltip(tooltip, { placement: 'bottom' })

  return (
    <>
      {tooltipVisible && tooltipMsg}
      <StyledCard>
        <CardHeader p="16px 24px" variant={variant}>
