import { useEffect } from 'react'
import { useCurrency } from 'hooks/Tokens'
import { useSwapActionHandlers } from 'state/swap/useSwapActionHandlers'
import { Field } from 'state/swap/actions'
import { useSwapState } from 'state/swap/hooks'
import StableSwapForm from './components/StableSwapForm'
import useStableConfig, { StableConfigContext, useStableFarms } from './hooks/useStableConfig'

const StableSwapFormContainer = () => {
  const stableFarms = useStableFarms()

  const { onCurrencySelection } = useSwapActionHandlers()

  const stableTokenPair = stableFarms?.length ? stableFarms[0] : null


  return stableTokenPair ? (
    <StableConfigContext.Provider value={stableConfig}>
      <StableSwapForm />
    </StableConfigContext.Provider>
  ) : null
}

export default StableSwapFormContainer
