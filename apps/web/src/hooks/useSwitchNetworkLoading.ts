
const switchNetworkLoadingAtom = atom(false)

export const useSwitchNetworkLoading = () => {
  return useAtom(switchNetworkLoadingAtom)
}
