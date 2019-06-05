import { nanoid } from '@reduxjs/toolkit'
import { useCallback } from 'react'
import { fetchTokenList } from './actions'
import { TokenList } from '../src/types'

function useFetchListCallback(
  dispatch: (action?: unknown) => void,
): (listUrl: string, sendDispatch?: boolean) => Promise<TokenList> {
  // note: prevent dispatch if using for list search or unsupported list
  return useCallback(
          }
          return tokenList
        })
        .catch((error) => {
          console.error(`Failed to get list at url ${listUrl}`, error)
          if (sendDispatch) {
            dispatch(fetchTokenList.rejected({ url: listUrl, requestId, errorMessage: error.message }))
          }
          throw error
        })
    },
    [dispatch],
  )
}

export default useFetchListCallback
