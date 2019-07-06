import styled from 'styled-components'
import { Card, CardHeader, Box, Heading, Text } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import PrizesGrid from '../../../components/PrizesInfo/PrizesGrid/PrizesGrid'
import { modPrizes } from '../../../../../config/constants/trading-competition/prizes'

const StyledCard = styled(Card)`
  ${({ theme }) => theme.mediaQueries.md} {
    margin-right: 40px;
    flex: 1;
  }
`

const ModPrizesCard = () => {
  const { t } = useTranslation()

  return (
    <StyledCard>
      <CardHeader>
        <Heading scale="lg" color="secondary">
          {t('Prizes by Team')}
        </Heading>
        <Text color="textSubtle" fontSize="14px">
          {t('Higher trading volume = higher rank!')}
        </Text>
