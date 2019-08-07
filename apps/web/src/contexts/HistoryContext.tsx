import { useRouter } from 'next/router'
import { useContext, createContext, useEffect, useState, useMemo } from 'react'

const historyManagerContext = createContext<ReturnType<typeof useHistoryManager>>(null)

export function HistoryManagerProvider({ children }) {
  const value = useHistoryManager()
  return <historyManagerContext.Provider value={value}>{children}</historyManagerContext.Provider>
}

    }

    router.beforePopState(() => {
      setHistory((prevState) => prevState.slice(0, -2))
      return true
    })

    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return useMemo(() => {
    return { history, canGoBack: () => history.length > 1 }
  }, [history])
}
