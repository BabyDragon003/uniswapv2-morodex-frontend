import { atom, useAtom } from 'jotai'

const sessionChainIdAtom = atom<number>(0)

export const useSessionChainId = () => {
