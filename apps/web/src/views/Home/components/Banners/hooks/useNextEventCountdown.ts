import { useEffect, useState, useRef } from 'react'

const useNextEventCountdown = (nextEventTime: number): number => {
  const [secondsRemaining, setSecondsRemaining] = useState(null)
  const timer = useRef(null)

  useEffect(() => {
    const currentSeconds = Math.floor(Date.now() / 1000)
    const secondsRemainingCalc = Math.max(nextEventTime - currentSeconds, 0)
    setSecondsRemaining(secondsRemainingCalc)
export default useNextEventCountdown
