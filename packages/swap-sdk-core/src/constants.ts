import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | number | string

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT,
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP,
}
export enum VMType {
  uint8 = 'uint8',
  uint256 = 'uint256',
}

export const VM_TYPE_MAXIMA = {
  [VMType.uint8]: JSBI.BigInt('0xff'),
  [VMType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'),
}
