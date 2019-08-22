import { FixedNumber } from '@ethersproject/bignumber'
import { renderHook } from '@testing-library/react-hooks'
import BigNumber from 'bignumber.js'
import { createSWRWrapper } from 'testUtils'
import { vi } from 'vitest'
import * as PoolHooks from '../state/pools/hooks'
import { useVaultApy } from './useVaultApy'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

vi.mock('../state/pools/hooks', () => ({
  // @ts-ignore
    ],
  ])('should get correct vault apy', (cases, want) => {
    // @ts-ignore
    PoolHooks.useCakeVault.mockReturnValue({
      totalShares: cases.totalShares,
      pricePerFullShare: cases.pricePerFullShare,
    })
    const { result } = renderHook(
      () => {
        const { flexibleApy, getLockedApy, lockedApy } = useVaultApy()
        return {
          flexibleApy,
          getLockedApy,
          lockedApy,
        }
      },
      {
        wrapper: createSWRWrapper({
          'masterChef-total-cake-pool-emission': cases.emission,
        }),
      },
    )

    expect(result.current.flexibleApy).toEqual(want.flexibleApy)
    expect(result.current.lockedApy).toEqual(want.lockedApy)
  })
})
