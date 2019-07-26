import {
  MutationFunction,
  MutationKey,
  UseMutationOptions,
  UseMutationResult,
  parseMutationArgs,
  useMutation as useMutation_,
} from '@tanstack/react-query'

import { queryClientContext as context } from '../../context'

export function useMutation<TData = unknown, TError = unknown, TVariables = void, TContext = unknown>(
  options: UseMutationOptions<TData, TError, TVariables, TContext>,
): UseMutationResult<TData, TError, TVariables, TContext>

export function useMutation<TData = unknown, TError = unknown, TVariables = void, TContext = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
  options?: Omit<UseMutationOptions<TData, TError, TVariables, TContext>, 'mutationFn'>,
): UseMutationResult<TData, TError, TVariables, TContext>

