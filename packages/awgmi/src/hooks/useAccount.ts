/* eslint-disable consistent-return */
import * as React from 'react'

import { GetAccountResult, getAccount, watchAccount } from '@pancakeswap/awgmi/core'
import { useSyncExternalStoreWithTracked } from './useSyncExternalStoreWithTracked'

export type UseAccountConfig = {
  /** Function to invoke when connected */
  onConnect?({
    account,
    connector,
    isReconnected,
  }: {
    account?: GetAccountResult['account']
    connector?: GetAccountResult['connector']

  if (!!onDisconnect && previousAccount.current?.status === 'connected' && account.status === 'disconnected')
    onDisconnect()

  previousAccount.current = account

  return account
}
