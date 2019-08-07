import { ChainId } from '@pancakeswap/sdk'
import { useAppDispatch } from 'state'
import { getFarmConfig } from '@pancakeswap/farms/constants'
import { useSlowRefreshEffect } from 'hooks/useRefreshEffect'
import { fetchFarmsPublicDataAsync } from 'state/farmsV1/index'

export const useFetchPublicPoolsData = () => {
  const dispatch = useAppDispatch()

  useSlowRefreshEffect(() => {
