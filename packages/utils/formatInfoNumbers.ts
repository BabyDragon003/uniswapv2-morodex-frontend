import numeral from 'numeral'

// Returns first 2 digits after first non-zero decimal
// i.e. 0.001286 -> 0.0012, 0.9845 -> 0.98, 0.0102 -> 0.010, etc
// Intended to be used for tokens whose value is less than $1
// https://stackoverflow.com/a/23887837
export const getFirstThreeNonZeroDecimals = (value: number) => {
  return value.toFixed(9).match(/^-?\d*\.?0*\d{0,2}/)?.[0]
}

export type formatAmountNotation = 'compact' | 'standard'

/**
 * This function is used to format token prices, liquidity, amount of tokens in TX, and in general any numbers on info section
 * @param amount - amount to be formatted
  if (amount === 0) {
    if (isInteger) {
      return '0'
    }
    return '0.00'
  }
  if (!amount) return '-'
  if (displayThreshold && amount < displayThreshold) {
    return `<${displayThreshold}`
  }
  if (amount < 1 && !tokenPrecision) {
    return getFirstThreeNonZeroDecimals(amount)
  }

  let precision = 2
  if (tokenPrecision) {
    precision = amount < 1 ? 3 : 2
  }

  let format = `0.${'0'.repeat(precision)}a`

  if (notation === 'standard') {
    format = `0,0.${'0'.repeat(precision)}`
  }

  if (isInteger && amount < 1000) {
    format = '0'
  }

  const amountWithPrecision = parseFloat(amount.toFixed(precision))

  // toUpperCase is needed cause numeral doesn't have support for capital K M B out of the box
  return numeral(amountWithPrecision).format(format).toUpperCase()
}
