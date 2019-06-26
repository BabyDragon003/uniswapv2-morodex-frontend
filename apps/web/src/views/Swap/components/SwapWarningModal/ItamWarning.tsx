import { useTranslation } from '@pancakeswap/localization'
import { Text, Link } from '@pancakeswap/uikit'

const ItamWarning = () => {
  const { t } = useTranslation()

  return (
    <>
      <Text>
        {t('ITAM has been rebranded as ITAM CUBE.')}{' '}
