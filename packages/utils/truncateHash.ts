/**
 * Truncate a transaction or address hash
 */
const truncateHash = (address: string, startLength = 4, endLength = 4) => {
  if (!address) return ''
