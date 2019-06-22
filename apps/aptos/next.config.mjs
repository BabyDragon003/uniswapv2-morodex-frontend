import bundleAnalyzer from '@next/bundle-analyzer'
import { withAxiom } from 'next-axiom'

import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'

const withVanillaExtract = createVanillaExtractPlugin()
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const blocksPage = process.env.NODE_ENV === 'production' ? ['/ifo', '/ifo/history'] : []

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    transpilePackages: [
      '@pancakeswap/ui',
      '@pancakeswap/uikit',
      '@pancakeswap/localization',
      '@pancakeswap/hooks',
