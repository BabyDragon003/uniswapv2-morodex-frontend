import { useTranslation } from '@pancakeswap/localization'
import { Text, Link, LinkExternal } from '@pancakeswap/uikit'

const BTTWarning = () => {
  const { t } = useTranslation()

  return (
    <>
      <Text>
        {t(
          'Please note that this is the old BTT token, which has been swapped to the new BTT tokens in the following ratio:',
        )}
      </Text>
      <Text>1 BTT (OLD) = 1,000 BTT (NEW)</Text>
      <Text mb="8px">
