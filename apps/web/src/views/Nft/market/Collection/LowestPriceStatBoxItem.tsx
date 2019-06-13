import useSWR from 'swr'
import { useTranslation } from '@pancakeswap/localization'
import { getLeastMostPriceInCollection } from 'state/nftMarket/helpers'
import { StatBoxItem, StatBoxItemProps } from '../components/StatBox'

interface LowestPriceStatBoxItemProps extends Omit<StatBoxItemProps, 'title' | 'stat'> {
  collectionAddress: string
}

const LowestPriceStatBoxItem: React.FC<React.PropsWithChildren<LowestPriceStatBoxItemProps>> = ({
  collectionAddress,
  ...props
}) => {
  const { t } = useTranslation()
  const { data: lowestCollectionPrice = null } = useSWR(

export default LowestPriceStatBoxItem
