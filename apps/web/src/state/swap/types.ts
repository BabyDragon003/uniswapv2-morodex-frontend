export type PairDataNormalized = {
  time: number
  token0Id: string
  token1Id: string
  reserve0: number
  reserve1: number
}[]

export type DerivedPairDataNormalized = {
  time: number
export enum PairDataTimeWindowEnum {
  DAY,
  WEEK,
  MONTH,
  YEAR,
}
