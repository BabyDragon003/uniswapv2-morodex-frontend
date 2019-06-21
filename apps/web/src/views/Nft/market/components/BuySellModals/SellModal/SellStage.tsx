import { Flex, Grid, Text, Button, Link, BinanceIcon, LinkExternal, useModal } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { nftsBaseUrl, pancakeBunniesAddress } from 'views/Nft/market/constants'
import { NftToken } from 'state/nftMarket/types'
import { getBscScanLinkForNft, isAddress } from 'utils'
import EditProfileModal from 'views/Profile/components/EditProfileModal'
import { useProfile } from 'state/profile/hooks'
import { Divider, HorizontalDivider, RoundedImage } from '../shared/styles'

interface SellStageProps {
  nftToSell: NftToken
  lowestPrice: number
  continueToNextStage: () => void
  continueToTransferStage: () => void
  onSuccessEditProfile?: () => void
}

// Initial stage when user wants to put their NFT for sale or transfer to another wallet
const SellStage: React.FC<React.PropsWithChildren<SellStageProps>> = ({
  nftToSell,
          {lowestPrice && (
            <>
              <Text small color="textSubtle">
                {t('Lowest price')}
              </Text>
              <Flex alignItems="center" justifyContent="flex-end">
                <BinanceIcon width={16} height={16} mr="4px" />
                <Text small>
                  {lowestPrice.toLocaleString(undefined, {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                  })}
                </Text>
              </Flex>
            </>
          )}
        </Grid>
      </Flex>
      <Flex justifyContent="space-between" px="16px" mt="8px">
        <Flex flex="2">
          <Text small color="textSubtle">
            {t('Token ID: %id%', { id: nftToSell.tokenId })}
          </Text>
        </Flex>
        <Flex justifyContent="space-between" flex="3">
          <Button
            as={Link}
            p="0px"
            height="16px"
            external
            variant="text"
            href={`${nftsBaseUrl}/collections/${nftToSell.collectionAddress}/${itemPageUrlId}`}
          >
            {t('View Item')}
          </Button>
          <HorizontalDivider />
          <LinkExternal
            isBscScan
            p="0px"
            height="16px"
            href={getBscScanLinkForNft(nftToSell.collectionAddress, nftToSell.tokenId)}
          >
            BscScan
          </LinkExternal>
        </Flex>
      </Flex>
      <Divider />
      <Flex flexDirection="column" px="16px" pb="16px">
        <Button mb="8px" onClick={continueToNextStage}>
          {t('Sell')}
        </Button>
        <Button mb="8px" variant="secondary" onClick={continueToTransferStage}>
          {t('Transfer')}
        </Button>
        {hasProfile && (
          <Button variant="secondary" onClick={onEditProfileModal}>
            {t('Set as Profile Pic')}
          </Button>
        )}
      </Flex>
    </>
  )
}

export default SellStage
