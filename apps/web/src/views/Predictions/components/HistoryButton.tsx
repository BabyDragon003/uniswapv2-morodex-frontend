import { useAccount } from 'wagmi'
import { AutoRenewIcon, HistoryIcon, IconButton } from '@pancakeswap/uikit'
import useLocalDispatch from 'contexts/LocalRedux/useLocalDispatch'
import { setHistoryPaneState } from 'state/predictions'
import { useGetIsFetchingHistory } from 'state/predictions/hooks'

const HistoryButton = () => {
  const isFetchingHistory = useGetIsFetchingHistory()
  const dispatch = useLocalDispatch()
  const { address: account } = useAccount()

  const handleClick = () => {
    dispatch(setHistoryPaneState(true))
  }

  return (
    <IconButton
      id="prediction-history-button"
      variant="subtle"
      onClick={handleClick}
