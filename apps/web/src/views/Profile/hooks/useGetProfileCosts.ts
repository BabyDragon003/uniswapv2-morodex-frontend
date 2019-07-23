import { useEffect, useState } from 'react'
import { BigNumber } from '@ethersproject/bignumber'
import { Zero } from '@ethersproject/constants'
import { useTranslation } from '@pancakeswap/localization'
import { multicallv2 } from 'utils/multicall'
  const [isLoading, setIsLoading] = useState(true)
  const [costs, setCosts] = useState({
    numberCakeToReactivate: Zero,
    numberCakeToRegister: Zero,
    numberCakeToUpdate: Zero,
  })
  const { toastError } = useToast()

  useEffect(() => {
    const fetchCosts = async () => {
      try {
        const calls = ['numberCakeToReactivate', 'numberCakeToRegister', 'numberCakeToUpdate'].map((method) => ({
          address: getPancakeProfileAddress(),
          name: method,
        }))
        const [[numberCakeToReactivate], [numberCakeToRegister], [numberCakeToUpdate]] = await multicallv2<
          [[BigNumber], [BigNumber], [BigNumber]]
        >({ abi: profileABI, calls })

        setCosts({
          numberCakeToReactivate,
          numberCakeToRegister,
          numberCakeToUpdate,
        })
        setIsLoading(false)
      } catch (error) {
        toastError(t('Error'), t('Could not retrieve CAKE costs for profile'))
      }
    }

    fetchCosts()
  }, [setCosts, toastError, t])

  return { costs, isLoading }
}

export default useGetProfileCosts
