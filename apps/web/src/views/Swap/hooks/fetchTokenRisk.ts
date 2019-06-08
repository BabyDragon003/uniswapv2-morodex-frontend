import { ChainId } from '@pancakeswap/sdk'
import { ACCESS_RISK_API } from 'config/constants/endpoints'

import { z } from 'zod'

const zBand = z.enum(['5/5', '4/5', '3/5', '2/5', '1/5'])
export const zRiskTokenData = z.object({
  trust_level: z.string(),
  band: zBand,
  scanned_ts: z.string(),
})

export const TOKEN_RISK = {
  VERY_LOW: 0,
  LOW: 1,
  MEDIUM: 2,
  HIGH: 3,
  VERY_HIGH: 4,
} as const

export const TOKEN_RISK_MAPPING = {
  '5/5': TOKEN_RISK.VERY_LOW,
  '4/5': TOKEN_RISK.LOW,
  '3/5': TOKEN_RISK.MEDIUM,
  '2/5': TOKEN_RISK.HIGH,
  const { band, scanned_ts } = data

  return {
    address,
    chainId,
    riskLevel: TOKEN_RISK_MAPPING[band],
    scannedTs: parseInt(scanned_ts, 10),
  }
}
