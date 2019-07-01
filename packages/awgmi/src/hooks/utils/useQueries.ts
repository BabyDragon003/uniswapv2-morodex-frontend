import { queryClientContext as context } from '../../context'

export function useQueries({ queries }: { queries: readonly [...QueriesOptions<any>] }) {
  const results = useQueries_({
    context,
    queries,
  })

  return results
}
