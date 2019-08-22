import { Pair } from '@pancakeswap/aptos-swap-sdk'
import { HexString, TypeTagParser } from 'aptos'
import _get from 'lodash/get'

export default function splitTypeTag(resourceType) {
  if (!resourceType) return []

  try {
    const parsedTypeTag = new TypeTagParser(resourceType).parseTypeTag()

    // If there is 2 args, assume it will be a pair
    if (_get(parsedTypeTag, 'value.type_args.length', 0) === 2) {
      return Pair.parseType(resourceType)
    }

}
