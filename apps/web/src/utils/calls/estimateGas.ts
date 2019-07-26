import { Contract, PayableOverrides } from '@ethersproject/contracts'
import { TransactionResponse } from '@ethersproject/providers'
import { calculateGasMargin } from 'utils'
import { ContractMethodName, MaybeContract, ContractMethodParams } from 'utils/types'

/**
 * Estimate the gas needed to call a function, and add a 10% margin
 * @param contract Used to perform the call
 * @param methodName The name of the method called
 * @param gasMarginPer10000 The gasMargin per 10000 (i.e. 10% -> 1000)
 * @param args An array of arguments to pass to the method
 * @returns https://docs.ethers.io/v5/api/providers/types/#providers-TransactionReceipt
 */
export const estimateGas = async <C extends Contract = Contract, N extends ContractMethodName<C> = any>(
  contract: MaybeContract<C>,
  methodName: N,
  methodArgs: ContractMethodParams<C, N>,
  overrides: PayableOverrides = {},
  gasMarginPer10000: number,
) => {
  overrides: PayableOverrides = {},
  gasMarginPer10000 = 1000,
): Promise<TransactionResponse> => {
  const gasEstimation = await estimateGas(contract, methodName, methodArgs, overrides, gasMarginPer10000)
  const tx = await contract[methodName](...methodArgs, {
    gasLimit: gasEstimation,
    ...overrides,
  })
  return tx
}
