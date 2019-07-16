import styled from 'styled-components'
import { Flex } from '@pancakeswap/uikit'
import EasterPrizesCard from './EasterPrizesCard'
import EasterPrizesText from './EasterPrizesText'

    align-items: center;
  }
`

const EasterPrizesInfo = () => {
  return (
    <Wrapper flexDirection="column">
      <EasterPrizesCard />
      <EasterPrizesText />
    </Wrapper>
  )
}

export default EasterPrizesInfo
