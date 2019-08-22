import { Checkbox, Flex, Text } from '@pancakeswap/uikit'
import { StyledItemRow } from '../ListFilter/styles'

interface CollectionItemRowProps {
  item: CollectionItem
  isSelected: boolean
  onClick: (evt) => void
}

interface CollectionItem {
  label: string
  collectionAddress: string
}

export const CollectionItemRow: React.FC<React.PropsWithChildren<CollectionItemRowProps>> = ({
