import { vi } from 'vitest'
import { getDeltaTimestamps } from 'utils/getDeltaTimestamps'

const UTC_NOW_UNDER_TEST = 1624809600

    const t24hExpected = UTC_NOW_UNDER_TEST - 86400
    const t48hExpected = UTC_NOW_UNDER_TEST - 86400 * 2
    const t7dExpected = UTC_NOW_UNDER_TEST - 86400 * 7
    const t14dExpected = UTC_NOW_UNDER_TEST - 86400 * 14
    expect(getDeltaTimestamps()).toStrictEqual([t24hExpected, t48hExpected, t7dExpected, t14dExpected])
  })
})
