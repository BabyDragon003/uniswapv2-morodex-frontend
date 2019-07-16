import styled from 'styled-components'
import { Flex, TokenPairImage, Pool } from '@pancakeswap/uikit'

const Container = styled(Flex)`
  align-items: center;
  title: string
  subTitle: string
  primarySrc: string
  secondarySrc: string
}

const CardHeader: React.FC<React.PropsWithChildren<CardHeaderProps>> = ({
  title,
  subTitle,
  primarySrc,
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
