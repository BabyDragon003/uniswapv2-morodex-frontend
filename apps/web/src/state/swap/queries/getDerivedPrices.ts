import { gql } from 'graphql-request'
import { Block } from 'state/info/types'

export const getDerivedPrices = (tokenAddress: string, blocks: Block[]) =>
  blocks.map(

export const getDerivedPricesQueryConstructor = (subqueries: string[]) => {
  return gql`
      query derivedTokenPriceData {
        ${subqueries}
      }
    `
}
