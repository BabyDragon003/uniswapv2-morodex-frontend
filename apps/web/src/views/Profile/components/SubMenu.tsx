import { useTranslation } from '@pancakeswap/localization'
import { useRouter } from 'next/router'
import BaseSubMenu from '../../Nft/market/components/BaseSubMenu'

const SubMenuComponent: React.FC<React.PropsWithChildren> = () => {
    {
      label: t('Items'),
      href: `/profile/${accountAddress}`,
    },
    {
      label: t('Activity'),
      href: `/profile/${accountAddress}/activity`,
    },
  ]

  return <BaseSubMenu items={ItemsConfig} activeItem={asPath} justifyContent="flex-start" mb="18px" />
}

export default SubMenuComponent
