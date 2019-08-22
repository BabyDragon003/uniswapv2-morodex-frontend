import { useAtom, useAtomValue } from 'jotai'
import { useCallback } from 'react'
import { typeInput } from './actions'
import { burnReducerAtom } from './reducers'
import { Field } from '../../type'

export function useBurnState() {
  return useAtomValue(burnReducerAtom)
}

export function useBurnActionHandlers(): {
  onUserInput: (field: Field, typedValue: string) => void
} {
  const [, dispatch] = useAtom(burnReducerAtom)

