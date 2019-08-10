import { Spinner, Text } from '@pancakeswap/uikit'

import styled, { keyframes } from 'styled-components'

const countdownAnimation = keyframes`
  from {
    stroke-dashoffset: 0px;
  }
  to {
    stroke-dashoffset: 113px;
  }
`

const CountdownContainer = styled.div`
  position: relative;
  margin: auto;
  height: 40px;
  width: 40px;
  text-align: center;

  & svg {
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
      <Text color="textSubtle" lineHeight="40px" display="inline-block">
        {secondsRemaining}
      </Text>
      <svg>
        <circle r="18" cx="20" cy="20" />
      </svg>
    </CountdownContainer>
  )
}

export default CountdownCircle
