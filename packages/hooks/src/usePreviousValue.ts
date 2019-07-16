import { useEffect, useRef } from 'react'

/**
 * Returns the previous value of the given value
 *
    ref.current = value
  }, [value])

  return ref.current
}

export default usePreviousValue
