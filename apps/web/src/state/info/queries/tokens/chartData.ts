import { gql } from 'graphql-request'
import { ChartEntry } from 'state/info/types'
import { fetchChartDataWithAddress, mapDayData } from '../helpers'
import { TokenDayDatasResponse } from '../types'
import { getMultiChainQueryEndPointWithStableSwap, MultiChainName, multiChainStartTime } from '../../constant'

const getTokenChartData = async (
  chainName: MultiChainName,
  skip: number,
  address: string,
): Promise<{ data?: ChartEntry[]; error: boolean }> => {
  try {
    const query = gql`
      query tokenDayDatas($startTime: Int!, $skip: Int!, $address: String!) {
        tokenDayDatas(
        skip,
        address,
      },
    )
    const data = tokenDayDatas.map(mapDayData)
    return { data, error: false }
  } catch (error) {
    console.error('Failed to fetch token chart data', error)
    return { error: true }
  }
}

const fetchTokenChartData = async (
  chainName: MultiChainName,
  address: string,
): Promise<{ data?: ChartEntry[]; error: boolean }> => {
  return fetchChartDataWithAddress(chainName, getTokenChartData, address)
}

export default fetchTokenChartData
