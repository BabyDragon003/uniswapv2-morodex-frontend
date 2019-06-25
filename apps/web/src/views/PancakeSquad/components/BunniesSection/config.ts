import { ContextApi } from '@pancakeswap/localization'

const bunniesConfig = (t: ContextApi['t']) => {
  return {
    headingText: t('10,000 bunnies.'),
      t('On top of that, there are a very small number of ultra-rare special unique bunnies as well...!'),
    ],
    primaryButton: {
      to: '/nfts',
      text: t('View in Market'),
    },
    images: { basePath: '/images/pancakeSquad/bunnies/bunny', alt: 'bunny nft' },
  }
}

export default bunniesConfig
