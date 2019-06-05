import { SignMessageArgs, SignMessageResult, signMessage as signMessage_ } from '@pancakeswap/awgmi/core'
import * as React from 'react'

import { MutationConfig } from '../types'
import { useMutation } from './utils/useMutation'

export type UseSignMessageArgs = Partial<SignMessageArgs>

export type UseSignMessageConfig = MutationConfig<SignMessageResult, Error, SignMessageArgs>

  onMutate,
  onSettled,
  onSuccess,
}: UseSignMessageArgs & UseSignMessageConfig = {}) {
  const { data, error, isError, isIdle, isLoading, isSuccess, mutate, mutateAsync, reset, status, variables } =
    useMutation(mutationKey({ message }), mutationFn, {
      onError,
      onMutate,
      onSettled,
      onSuccess,
    })

  const signMessage = React.useCallback(
    (args?: SignMessageArgs) => mutate(args || ({ message } as SignMessageArgs)),
    [message, mutate],
  )

  const signMessageAsync = React.useCallback(
    (args?: SignMessageArgs) => mutateAsync(args || ({ message } as SignMessageArgs)),
    [message, mutateAsync],
  )

  return {
    data,
    error,
    isError,
    isIdle,
    isLoading,
    isSuccess,
    reset,
    signMessage,
    signMessageAsync,
    status,
    variables,
  }
}
