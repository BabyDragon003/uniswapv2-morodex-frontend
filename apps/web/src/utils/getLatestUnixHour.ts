import { ONE_HOUR_SECONDS } from 'config/constants/info'
import { getUnixTime } from 'date-fns'

// Returns unix timestamp rounded down to nearest hour
const getLatestUnixHour = (date?: Date) => {
