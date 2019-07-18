import { gql } from 'graphql-request'
import { ChartEntry } from 'state/info/types'
import { PairDayDatasResponse } from '../types'
import { mapPairDayData, fetchChartDataWithAddress } from '../helpers'
import { getMultiChainQueryEndPointWithStableSwap, MultiChainName, multiChainStartTime } from '../../constant'

const getPoolChartData = async (
  chainName: MultiChainName,
  skip: number,
  address: string,
): Promise<{ data?: ChartEntry[]; error: boolean }> => {
  try {
    const query = gql`
      query pairDayDatas($startTime: Int!, $skip: Int!, $address: Bytes!) {
        pairDayDatas(
        skip,
        address,
      },
    )
    const data = pairDayDatas.map(mapPairDayData)
    return { data, error: false }
  } catch (error) {
    console.error('Failed to fetch pool chart data', error)
    return { error: true }
  }
}

const fetchPoolChartData = async (
  chainName: MultiChainName,
  address: string,
): Promise<{ data?: ChartEntry[]; error: boolean }> => {
  return fetchChartDataWithAddress(chainName, getPoolChartData, address)
}

export default fetchPoolChartData
