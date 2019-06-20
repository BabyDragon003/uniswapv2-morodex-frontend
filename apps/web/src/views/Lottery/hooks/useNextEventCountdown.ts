import { useEffect, useState, useRef } from 'react'
import { useAppDispatch } from 'state'
import { useLottery } from 'state/lottery/hooks'
import { fetchCurrentLottery, setLotteryIsTransitioning } from 'state/lottery'

const useNextEventCountdown = (nextEventTime: number): number => {
  const dispatch = useAppDispatch()
  const [secondsRemaining, setSecondsRemaining] = useState(null)
  const timer = useRef(null)
  const { currentLotteryId } = useLottery()

  useEffect(() => {
    dispatch(setLotteryIsTransitioning({ isTransitioning: false }))
    const currentSeconds = Math.floor(Date.now() / 1000)
    const secondsRemainingCalc = nextEventTime - currentSeconds

  return secondsRemaining
}

export default useNextEventCountdown
