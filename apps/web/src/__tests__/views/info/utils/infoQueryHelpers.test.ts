import { vi } from 'vitest'
import { getDeltaTimestamps } from 'utils/getDeltaTimestamps'

const UTC_NOW_UNDER_TEST = 1624809600

describe('info/utils/infoQueryHelpers', () => {
  beforeAll(() => {
    vi.useFakeTimers({})
    vi.setSystemTime(new Date(UTC_NOW_UNDER_TEST * 1000))
  })
