import { SignMessageArgs, SignMessageResult, signMessage as signMessage_ } from '@pancakeswap/awgmi/core'
import * as React from 'react'

import { MutationConfig } from '../types'
import { useMutation } from './utils/useMutation'

export type UseSignMessageArgs = Partial<SignMessageArgs>

export type UseSignMessageConfig = MutationConfig<SignMessageResult, Error, SignMessageArgs>

export const mutationKey = (args: UseSignMessageArgs) => [{ entity: 'signMessage', ...args }] as const

const mutationFn = (args: UseSignMessageArgs) => {
  const { message } = args
  if (!message) throw new Error('message is required')
  return signMessage_({ message })
}

export function useSignMessage({
  message,
  onError,
  onMutate,
  onSettled,
  onSuccess,
}: UseSignMessageArgs & UseSignMessageConfig = {}) {
    signMessage,
    signMessageAsync,
    status,
    variables,
  }
}
