import { useTranslation } from '@pancakeswap/localization'
import { Button, Text, useMatchBreakpoints, Box, OpenNewIcon } from '@pancakeswap/uikit'
import Image from 'next/legacy/image'
import styled from 'styled-components'
import { Aptos, AptosXPancakeSwap } from './images'
import * as S from './Styled'

const RightWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: -10px;
  ${({ theme }) => theme.mediaQueries.sm} {
    right: 1px;
    bottom: -18px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    right: 0px;
    bottom: -21px;
  }
`
`

const AptosBanner = () => {
  const { t } = useTranslation()
  const { isMobile } = useMatchBreakpoints()
  return (
    <S.Wrapper
      style={{
        background: `linear-gradient(180deg, #00BFA5 0%, #005A5A 100%)`,
        overflow: isMobile ? 'hidden' : 'visible',
      }}
    >
      <S.Inner>
        <S.LeftWrapper>
          <Box>
            <Image src={AptosXPancakeSwap} alt="aptosXPancakeSwapImage" width={211} height={18} placeholder="blur" />
          </Box>
          <AptosTitle>{t('Hello Aptos Project Teams!')}</AptosTitle>

          <Button
            minHeight="48px"
            onClick={() =>
              window?.open('https://docs.dapp-frontend-prince.web.app/aptos-deployment', '_blank', 'noopener noreferrer')
            }
          >
            <Text color="invertedContrast" bold fontSize="16px" mr="4px">
              👋 {t('Get in Touch')}
            </Text>
            <OpenNewIcon color="invertedContrast" />
          </Button>
        </S.LeftWrapper>
        <RightWrapper>
          <Image
            src={Aptos}
            alt="aptosImage"
            width={isMobile ? 1100 : 930}
            height={isMobile ? 250 : 231}
            placeholder="blur"
          />
        </RightWrapper>
      </S.Inner>
    </S.Wrapper>
  )
}

export default AptosBanner
