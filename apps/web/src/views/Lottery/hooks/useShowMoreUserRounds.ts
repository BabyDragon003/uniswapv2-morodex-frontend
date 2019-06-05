import { useAccount } from 'wagmi'
import { useState } from 'react'
import { useAppDispatch } from 'state'
import { fetchAdditionalUserLotteries } from 'state/lottery'
import { MAX_USER_LOTTERIES_REQUEST_SIZE } from 'state/lottery/getUserLotteryData'

const useShowMoreUserRounds = () => {
  const { address: account } = useAccount()
  const dispatch = useAppDispatch()
  const [numUserRoundsRequested, setNumUserRoundsRequested] = useState(MAX_USER_LOTTERIES_REQUEST_SIZE)
