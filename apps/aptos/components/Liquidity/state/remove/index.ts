import { useAtom, useAtomValue } from 'jotai'
import { useCallback } from 'react'
import { typeInput } from './actions'
import { burnReducerAtom } from './reducers'
import { Field } from '../../type'
  onUserInput: (field: Field, typedValue: string) => void
} {
  const [, dispatch] = useAtom(burnReducerAtom)

  const onUserInput = useCallback(
    (field: Field, typedValue: string) => {
      dispatch(typeInput({ field, typedValue }))
    },
    [dispatch],
  )

  return {
    onUserInput,
  }
}
