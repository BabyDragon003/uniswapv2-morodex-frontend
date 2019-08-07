import styled from 'styled-components'
import { Flex, TokenPairImage, Pool } from '@pancakeswap/uikit'

const Container = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  padding: 24px 24px 16px 24px;
  border-bottom: solid 1px ${({ theme }) => theme.colors.cardBorder};
`

  secondarySrc,
}) => {
  return (
    <Container>
      <Pool.PoolCardHeaderTitle title={title} subTitle={subTitle} />
      <TokenPairImage width={64} height={64} primarySrc={primarySrc} secondarySrc={secondarySrc} />
    </Container>
  )
}

export default CardHeader
