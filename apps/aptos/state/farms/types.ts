/* eslint-disable camelcase */

export interface FarmResourcePoolInfo {
  acc_cake_per_share: string
  alloc_point: string
  is_regular: boolean
  last_reward_timestamp: string
  total_amount: string
}

export interface FarmResourceUserInfo {
  length: string
  inner: {
    handle: string
  }
}

export interface MapFarmResource {
  pid?: number
  admin: string
export interface FarmUserInfoResponse {
  amount: string
  reward_debt: string
}

export interface FarmUserInfoResource {
  pid_to_user_info: {
    inner: {
      handle: string
    }
    length: string
  }
  pids: string[]
}
