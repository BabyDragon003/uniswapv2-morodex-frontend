import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'
import { withAxiom } from 'next-axiom'

const withVanillaExtract = createVanillaExtractPlugin()

      '@pancakeswap/uikit',
      '@pancakeswap/ui',
      '@pancakeswap/hooks',
      '@pancakeswap/localization',
      '@pancakeswap/utils',
    ],
  },
  compiler: {
    styledComponents: true,
  },
}

export default withAxiom(withVanillaExtract(nextConfig))
