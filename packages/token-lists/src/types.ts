type ExtensionValue = string | number | boolean | null | undefined

export interface TokenInfo {
  readonly chainId: number
  readonly address: string
  readonly name: string
  readonly decimals: number
  readonly symbol: string
  readonly logoURI?: string
  readonly tags?: string[]
  readonly extensions?: {
    readonly [key: string]:
      | {
          [key: string]:
            | {
                [key: string]: ExtensionValue
              }
            | ExtensionValue
        }
      | ExtensionValue
  readonly keywords?: string[]
  readonly tags?: Tags
  readonly logoURI?: string
}
