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
          'The Multiplier represents the proportion of CAKE rewards each farm receives, as a proportion of the CAKE produced each block.',
        )}
      </Text>
      <Text my="24px">
        {t('For example, if a 1x farm received 1 CAKE per block, a 40x farm would receive 40 CAKE per block.')}
      </Text>
      <Text>
        {t(
          'We have recently rebased multipliers by a factor of 10, this is only a visual change and does not affect the amount of CAKE each farm receives.',
        )}
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
