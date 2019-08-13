import { createContext, useContext, useState, useMemo } from 'react'

export const IfoContext = createContext(null) as React.Context<any>

export function useConfig() {
  return <IfoContext.Provider value={providerValue}>{children}</IfoContext.Provider>
}
