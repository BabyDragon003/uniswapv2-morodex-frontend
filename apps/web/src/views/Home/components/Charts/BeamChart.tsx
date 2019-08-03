import { Dispatch, SetStateAction } from 'react'
import { ResponsiveContainer, XAxis, YAxis, Tooltip, AreaChart, Area, CartesianAxis, CartesianGrid } from 'recharts'
import useTheme from 'hooks/useTheme'
import { formatAmount } from 'utils/formatInfoNumbers'
import { LineChartLoader } from 'components/ChartLoaders'
import { useTranslation } from '@pancakeswap/localization'

export type BeamChartProps = {
  data: any[]
  setHoverValue: Dispatch<SetStateAction<number | undefined>> // used for value on hover
  setHoverDate: Dispatch<SetStateAction<string | undefined>> // used for label of value
} & React.HTMLAttributes<HTMLDivElement>

/**
 * Note: remember that it needs to be mounted inside the container with fixed height
 */
const BeamChart = ({ data, setHoverValue, setHoverDate }: BeamChartProps) => {
  const {
    currentLanguage: { locale },
  } = useTranslation()
  const { theme } = useTheme()
  if (!data || data.length === 0) {
    return <LineChartLoader />
  }
  return (
          minTickGap={30}
        />
        <YAxis
          dataKey="value"
          tickCount={5}
          tickLine={false}
          scale="linear"
        />
        <Tooltip
          cursor={{ stroke: theme.colors.secondary }}
          contentStyle={{ display: 'none' }}
          formatter={(tooltipValue, name, props) => {
            setHoverValue(props.payload.value)
            setHoverDate(
              props.payload.time.toLocaleString(locale, {
                year: 'numeric',
                day: 'numeric',
                month: 'short',
              }),
            )
            return null
          }}
        />
        <Area dataKey="value" type="monotone" stroke={theme.colors.secondary} fill="url(#gradient)" strokeWidth={2} />
        <CartesianAxis tick={false} />
        <CartesianGrid horizontal={true} stroke="rgba(255, 255, 255, 0.2)" />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default BeamChart
