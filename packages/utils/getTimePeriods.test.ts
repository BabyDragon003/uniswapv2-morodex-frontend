import getTimePeriods from './getTimePeriods'

it.each([
  [40, { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 40 }],
  [60, { years: 0, months: 0, days: 0, hours: 0, minutes: 1, seconds: 0 }],
  expect(getTimePeriods(seconds)).toEqual(expected)
})
