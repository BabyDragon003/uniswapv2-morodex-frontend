import React from 'react'
import styled from 'styled-components'
import { useTranslation } from '@pancakeswap/localization'
import { Flex, Text, HelpIcon, useTooltip, Link } from '@pancakeswap/uikit'
import { MultiplierProps } from '../Cells/Multiplier'

const Containter = styled(Flex)`
  margin-top: 12px;
  padding: 0;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 0 12px;
  }
`

const ReferenceElement = styled.div`
  display: inline-block;
  align-self: center;
`

const MultiplierWrapper = styled.div`
  color: ${({ theme }) => theme.colors.text};
  width: 36px;
  margin-right: 6px;
      </Text>
      <Link
        mt="8px"
        display="inline"
        href="https://medium.com/pancakeswap/farm-mutlipliers-visual-update-1f5f5f615afd"
        external
      >
        {t('Read more')}
      </Link>
    </>
  )
  const { targetRef, tooltip, tooltipVisible } = useTooltip(tooltipContent, {
    placement: 'top-end',
    tooltipOffset: [20, 10],
  })

  return (
    <Containter justifyContent="space-between">
      <Text>{t('Multiplier')}</Text>
      <Flex>
        <MultiplierWrapper>{displayMultiplier}</MultiplierWrapper>
        <ReferenceElement ref={targetRef}>
          <HelpIcon color="textSubtle" />
        </ReferenceElement>
        {tooltipVisible && tooltip}
      </Flex>
    </Containter>
  )
}

export default TotalStaked
