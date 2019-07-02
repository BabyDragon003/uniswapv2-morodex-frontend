/* eslint-disable camelcase */
export interface HoldersVestingCount {
  handle: string
}

  vesting_schedule_ids: Uint8Array[]
  vesting_schedules: VestingSchedules
  vesting_total_amount: string
}

export interface RootObject {
  type: string
  data: Data
}
