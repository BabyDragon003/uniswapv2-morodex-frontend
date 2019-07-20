import { Bet, BetPosition } from 'state/types'
import { formatNumber } from '@pancakeswap/utils/formatBalance'

export const formatUsd = (usd: number, displayedDecimals: number) => {
  return `$${formatNumber(usd || 0, displayedDecimals, displayedDecimals)}`
}

export const formatBnb = (bnb: number, displayedDecimals: number) => {
  return bnb
    ? bnb.toLocaleString(undefined, {
        minimumFractionDigits: displayedDecimals,
        maximumFractionDigits: displayedDecimals,
      })
    : '0'
}

export const getMultiplier = (total: number, amount: number) => {
  if (total === 0 || amount === 0) {
    return 0
  }

  return total / amount
}

/**
