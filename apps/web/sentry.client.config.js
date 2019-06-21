// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import { init, GlobalHandlers, Breadcrumbs, Dedupe } from '@sentry/react'

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN

const isUserRejected = (err) => {
  // provider user rejected error code
  return typeof err === 'object' && 'code' in err && err.code === 4001
}

const ENV = process.env.VERCEL_ENV || process.env.NODE_ENV

init({
  dsn: SENTRY_DSN,
  integrations: [
    new Breadcrumbs({
      console: ENV === 'production',
  ignoreErrors: [
    'User denied transaction signature',
    'Non-Error promise rejection captured',
    'User rejected the transaction',
    'cancelled',
    'PollingBlockTracker',
  ],
})
