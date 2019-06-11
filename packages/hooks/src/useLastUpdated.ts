import { useCallback, useState } from 'react'
import usePreviousValue from './usePreviousValue'

/**
 * A helper hook to keep track of the time between events
  const setLastUpdated = useCallback(() => {
    setStateLastUpdated(Date.now())
  }, [setStateLastUpdated])

  return { lastUpdated, previousLastUpdated, setLastUpdated }
}

export default useLastUpdated
