import { ReactNode } from 'react'
import { Box, Flex, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useTheme } from '@pancakeswap/hooks'
import NoSSR from 'components/NoSSR'

const StyledChoiceContainer = styled(Flex)`
  width: 100%;
  flex-direction: column;

  @media screen and (min-width: 1440px) {
    width: 1400px;
  }
`

const StyledContainer = styled(Flex)<{ isDark: boolean }>`
  position: relative;
  border-radius: 24px;
  padding: 12px 16px;
  background: ${({ isDark }) =>
`

const StyledTitleContainer = styled(Box)`
  padding: 0 16px;
  margin-bottom: 64px;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 80px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 130px;
  }
`

interface ArticleViewProps {
  title: string
  subTitle?: string
  children: ReactNode
}

const ArticleView: React.FC<React.PropsWithChildren<ArticleViewProps>> = ({ title, subTitle, children }) => {
  const { isDark } = useTheme()

  return (
    <StyledChoiceContainer>
      <StyledTitleContainer>
        <Text bold mb="4px" color="secondary" fontSize={['24px', '24px', '24px', '40px']}>
          {title}
        </Text>
        {subTitle && (
          <Text color="textSubtle" fontSize={['14px', '14px', '16px']}>
            {subTitle}
          </Text>
        )}
      </StyledTitleContainer>
      <NoSSR>
        <StyledContainer isDark={isDark}>
          <Container>{children}</Container>
        </StyledContainer>
      </NoSSR>
    </StyledChoiceContainer>
  )
}

export default ArticleView
