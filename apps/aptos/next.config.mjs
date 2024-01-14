import bundleAnalyzer from '@next/bundle-analyzer'
import { withAxiom } from 'next-axiom'

import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'

const withVanillaExtract = createVanillaExtractPlugin()
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

      '@pancakeswap/ui',
      '@pancakeswap/uikit',
      '@pancakeswap/localization',
      '@pancakeswap/hooks',
      '@pancakeswap/utils',
      '@pancakeswap/tokens',
      '@pancakeswap/farms',
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/swap',
        permanent: false,
      },
      ...blocksPage.map((p) => ({
        source: p,
        destination: '/404',
        permanent: false,
      })),
    ]
  },
}

export default withBundleAnalyzer(withVanillaExtract(withAxiom(nextConfig)))
