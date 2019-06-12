import { StyledCollectibleCard } from './styles'
import CardBody from './CardBody'
import { CollectibleCardProps } from './types'

const CollectibleActionCard: React.FC<React.PropsWithChildren<CollectibleCardProps>> = ({
  nft,
  nftLocation,
  currentAskPrice,
  isUserNft,
  ...props
