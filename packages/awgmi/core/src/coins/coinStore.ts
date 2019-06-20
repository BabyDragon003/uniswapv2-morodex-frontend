/* eslint-disable camelcase */
export const COIN_STORE_TYPE_PREFIX = '0x1::coin::CoinStore'
export const wrapCoinStoreTypeTag = (type: string) => `${COIN_STORE_TYPE_PREFIX}<${type}>`

export type CoinStoreResult = {
  coin: {
    value: string
  }
  deposit_events: {
    counter: string
    guid: {
      id: {
        addr: string
        creation_num: string
      }
