import { NftLocation } from 'state/nftMarket/types'
import { Text, Flex, WalletFilledIcon, CameraIcon, SellIcon } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'

const LocationTag: React.FC<React.PropsWithChildren<{ nftLocation: NftLocation }>> = ({ nftLocation }) => {
  const { t } = useTranslation()

  const WalletTag = () => {
    return (
      <Flex justifyContent="center">
        <WalletFilledIcon height="12px" color="secondary" />
        <Text color="secondary" fontSize="14px">
          {t('Wallet')}
        </Text>
      </Flex>
    )
  }

  const ForSaleTag = () => {
    return (
    [NftLocation.WALLET]: WalletTag(),
    [NftLocation.PROFILE]: ProfilePicTag(),
    [NftLocation.FORSALE]: ForSaleTag(),
  }

  return tagsConfig[nftLocation]
}

export default LocationTag
