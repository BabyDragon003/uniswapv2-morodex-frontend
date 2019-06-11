import { useState, useEffect } from 'react'

/**
 * Use this hook when you want to animate something when it appears on the screen (e.g. when some prop set to true)
 * but when its not on the screen you want it to be fully unmounted and not just hidden or height 0.
 */
const useDelayedUnmount = (isMounted: boolean, delayTime: number) => {
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>
    if (isMounted && !shouldRender) {
      setShouldRender(true)
    } else if (!isMounted && shouldRender) {
      timeoutId = setTimeout(() => setShouldRender(false), delayTime)
    }
    return () => clearTimeout(timeoutId)
  }, [isMounted, delayTime, shouldRender])
  return shouldRender
}

export default useDelayedUnmount
