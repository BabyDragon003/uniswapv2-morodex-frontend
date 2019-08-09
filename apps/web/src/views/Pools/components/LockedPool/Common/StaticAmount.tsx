import { Text, Flex, Image, Box, BalanceWithLoading } from '@pancakeswap/uikit'
import Divider from 'components/Divider'
import { useTranslation } from '@pancakeswap/localization'
import { StaticAmountPropsType } from '../types'

const StaticAmount: React.FC<React.PropsWithChildren<StaticAmountPropsType>> = ({
  stakingSymbol,
  stakingAddress,
  lockedAmount,
  usdValueStaked,
}) => {
  const { t } = useTranslation()

  return (
    <>
      <Text color="textSubtle" textTransform="uppercase" bold fontSize="12px">
        {t('Add CAKE to lock')}
      </Text>
      <Flex alignItems="center" justifyContent="space-between" mb="16px">
        <Box>

export default StaticAmount
