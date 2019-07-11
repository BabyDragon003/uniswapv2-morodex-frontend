import { ErrorBoundary as SErrorBoundary } from '@sentry/nextjs'
import Page from 'components/Layout/Page'
import { useTranslation } from '@pancakeswap/localization'
import { Button, Text, LogoIcon, Flex, IconButton, CopyIcon, copyText } from '@pancakeswap/uikit'
import { useCallback } from 'react'

export function SentryErrorBoundary({ children }) {
  const { t } = useTranslation()
  const handleOnClick = useCallback(() => window.location.reload(), [])
  return (
    <SErrorBoundary
      beforeCapture={(scope) => {
        scope.setLevel('fatal')
      }}
      fallback={({ eventId }) => {
              <Button onClick={handleOnClick}>{t('Click here to reset!')}</Button>
            </Flex>
          </Page>
        )
      }}
    >
      {children}
    </SErrorBoundary>
  )
}
