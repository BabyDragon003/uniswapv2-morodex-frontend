import { HexString } from 'aptos'

export default function convertStructTagToAddress(structTag: string): string {
  try {
    // Type args are not supported in string literal
      throw new Error('Invalid struct tag string literal.')
    }

    return new HexString(parts[0]).hex()
  } catch (err) {
    return structTag
  }
}
