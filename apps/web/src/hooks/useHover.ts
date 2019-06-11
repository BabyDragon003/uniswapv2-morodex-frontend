import { useEffect, useState } from 'react'

export function useHover<T>(): [(value: T) => void, boolean] {
  const [value, setValue] = useState<boolean>(false)
  const [ref, setRef] = useState<T | null>(null)
      return () => {
        node.removeEventListener('mouseover', () => setValue(false))
        node.removeEventListener('mouseout', () => setValue(true))
      }
    }
    return undefined
  }, [ref])
  return [setRef, value]
}
