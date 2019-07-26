import styled from 'styled-components'
import { Flex } from '@pancakeswap/uikit'

export const ActionContainer = styled(Flex)`
  flex-direction: column;
  padding: 16px;
  border: 2px solid ${({ theme }) => theme.colors.input};
  border-radius: 16px;
  margin-bottom: 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 12px;
    margin-right: 12px;
    margin-bottom: 0;
  }
}

  ${({ theme }) => theme.mediaQueries.xl} {
    margin-left: 32px;
    margin-right: 0;

ActionContent.defaultProps = {
  mt: '8px',
}
