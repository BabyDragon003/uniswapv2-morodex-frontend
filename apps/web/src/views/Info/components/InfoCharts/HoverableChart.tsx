import { Box, Text, Skeleton } from '@pancakeswap/uikit'
import { fromUnixTime } from 'date-fns'
import { useState, useMemo, memo, useEffect } from 'react'
import { ChartEntry, ProtocolData } from 'state/info/types'
import { formatAmount } from 'utils/formatInfoNumbers'
import BarChart from './BarChart'
import LineChart from './LineChart'

interface HoverableChartProps {
  chartData: ChartEntry[]
  protocolData: ProtocolData
  currentDate: string
  valueProperty: string
  title: string
  ChartComponent: typeof BarChart | typeof LineChart
}

const HoverableChart = ({
  chartData,
  protocolData,
  currentDate,
  valueProperty,
  title,
  ChartComponent,
}: HoverableChartProps) => {
  return (
    <Box p={['16px', '16px', '24px']}>
      <Text bold color="secondary">
        {title}
      </Text>
      {hover > -1 ? ( // sometimes data is 0
        <Text bold fontSize="24px">
          ${formatAmount(hover)}
        </Text>
      ) : (
        <Skeleton width="128px" height="36px" />
      )}
      <Text>{dateHover ?? currentDate}</Text>
      <Box height="250px">
        <ChartComponent data={formattedData} setHoverValue={setHover} setHoverDate={setDateHover} />
      </Box>
    </Box>
  )
}

export default memo(HoverableChart)
