import { Td, Text } from '@pancakeswap/uikit'
import { PredictionUser } from 'state/types'
import ResultAvatar from './ResultAvatar'
import { NetWinnings } from './styles'

interface DesktopRowProps {
  rank?: number
  user: PredictionUser
}

const DesktopRow: React.FC<React.PropsWithChildren<DesktopRowProps>> = ({ rank, user, ...props }) => (
  <tr {...props}>
    {rank ? (
      <Td>
        <Text textAlign="center" fontWeight="bold" color="secondary">{`#${rank}`}</Text>
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      })}%`}
    </Td>
    <Td textAlign="center">
      <strong>{user.totalBetsClaimed.toLocaleString()}</strong>
    </Td>
    <Td textAlign="center">{user.totalBets.toLocaleString()}</Td>
  </tr>
)

export default DesktopRow
