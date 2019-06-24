
const removeTrailingZeros = (amount: string): string => {
  return amount.replace(removeTrailingZerosRegex, '$1$2$3')
}

export default removeTrailingZeros
