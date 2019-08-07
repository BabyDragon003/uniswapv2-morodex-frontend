import { ConnectorNotFoundError, WalletProviderError, UserRejectedRequestError } from '../errors'
import { getClient } from '../client'
import { SignMessagePayload, SignMessageResponse } from '../connectors'

export type SignMessageArgs = {
  /** Message to sign with wallet */
  message: SignMessagePayload
}

export type SignMessageResult = SignMessageResponse
}
