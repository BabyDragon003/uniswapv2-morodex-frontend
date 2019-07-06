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
          first: 1000
          skip: $skip
          where: { pairAddress: $address, date_gt: $startTime }
          orderBy: date
          orderDirection: asc
        ) {
          date
          dailyVolumeUSD
          reserveUSD
        }
