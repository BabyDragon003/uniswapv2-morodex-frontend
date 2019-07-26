import { ReactElement } from 'react'
import { Box, Flex, HelpIcon, CardHeader, CardBody, Text, useTooltip } from '@pancakeswap/uikit'

import { StyledCard } from '../IfoCardStyles'
import { CardConfigReturn } from './types'

interface GenericIfoCardElements {
  action: ReactElement
  content: ReactElement
}

const GenericIfoCard: React.FC<React.PropsWithChildren<CardConfigReturn & GenericIfoCardElements>> = ({
  title,
  variant,
  action,
  content,
  tooltip,
}) => {
  const { targetRef, tooltip: tooltipMsg, tooltipVisible } = useTooltip(tooltip, { placement: 'bottom' })

            </Box>
          </Flex>
        </CardBody>
      </StyledCard>
    </>
  )
}

export default GenericIfoCard
