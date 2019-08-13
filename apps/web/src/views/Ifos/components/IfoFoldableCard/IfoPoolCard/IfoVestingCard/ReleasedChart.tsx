interface ReleasedChartProps {
  percentage: number
}

const ReleasedChart: React.FC<React.PropsWithChildren<ReleasedChartProps>> = ({ percentage }) => {
        r="15.91549430918954"
        fill="transparent"
        stroke="#D7CAEC"
        strokeWidth="5"
        strokeDasharray="100"
        strokeDashoffset={percentage}
      />
    </svg>
  )
}

export default ReleasedChart
