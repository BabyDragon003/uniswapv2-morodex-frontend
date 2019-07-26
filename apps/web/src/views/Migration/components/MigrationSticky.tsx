import React from 'react'
import styled from 'styled-components'
import { useAccount } from 'wagmi'
import { useTranslation } from '@pancakeswap/localization'
import { Text, Button, useMatchBreakpoints } from '@pancakeswap/uikit'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { ProgressStepsType } from './ProgressSteps'

const Container = styled.div`
  position: sticky;
  bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: auto;
  padding: 16px;
  z-index: 6;

  ${({ theme }) => theme.mediaQueries.sm} {
  margin-right: 16px;
`

const TextTitle = styled(Text)`
  font-size: 16px;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 20px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: 40px;
  }
`

const TextSubTitle = styled(Text)`
  font-size: 12px;
  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: 16px;
  }
`

interface MigrationStickyProps {
  step: ProgressStepsType
  handleClick: () => void
}

const MigrationSticky: React.FC<React.PropsWithChildren<MigrationStickyProps>> = ({ step, handleClick }) => {
  const { t } = useTranslation()
  const { address: account } = useAccount()
  const { isMobile } = useMatchBreakpoints()

  const isStep1: boolean = step === ProgressStepsType.STEP1
  const title: string = isStep1 ? t('Unstaking LP Tokens and CAKE') : t('Stake in the new contract.')
  const subTitle: string = isStep1
    ? t('All the earned CAKE will be harvested to your wallet upon unstake.')
    : t('Each farm and pool has to be individually enabled before staking.')
  const buttonText: string = isStep1 ? t('Go to Stake') : t('Skip')

  if (!account) {
    return (
      <Container>
        <TextGroup>
          <TextTitle bold>{t('MasterChef v2 Migration')}</TextTitle>
          <TextSubTitle>{t('Please connect wallet to check your pools & farms status.')}</TextSubTitle>
        </TextGroup>
        <ConnectWalletButton width={isMobile ? '131px' : '178px'} />
      </Container>
    )
  }

  return (
    <Container>
      <TextGroup>
        <TextTitle bold>{title}</TextTitle>
        <TextSubTitle>{subTitle}</TextSubTitle>
      </TextGroup>
      <Button minWidth={isMobile ? '145px' : '178px'} onClick={handleClick}>
        {buttonText}
      </Button>
    </Container>
  )
}

export default MigrationSticky
