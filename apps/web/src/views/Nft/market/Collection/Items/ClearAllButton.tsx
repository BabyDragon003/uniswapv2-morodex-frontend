import { Button, ButtonProps } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { useNftStorage } from 'state/nftMarket/storage'

interface ClearAllButtonProps extends ButtonProps {

  const clearAll = () => {
    removeAllItemFilters(collectionAddress)
  }

  return (
    <Button key="clear-all" variant="text" scale="sm" onClick={clearAll} {...props}>
      {t('Clear')}
    </Button>
  )
}

export default ClearAllButton
