import { captureException } from '@sentry/nextjs'

const assignError = (maybeError: any) => {
  if (typeof maybeError === 'string') {
    return new Error(maybeError)
  }
  if (typeof maybeError === 'object') {
    const error = new Error(maybeError?.message ?? String(maybeError))
    if (maybeError?.stack) {
      error.stack = maybeError.stack
  return typeof err === 'object' && 'code' in err && err.code === 4001
}

const ENABLED_LOG = false

export const logError = (error: Error | unknown) => {
  if (ENABLED_LOG) {
    if (error instanceof Error) {
      captureException(error)
    } else {
      captureException(assignError(error), error)
    }
  }
  console.error(error)
}
