import { useTranslation } from '@pancakeswap/localization'
import { Image, Swap } from '@pancakeswap/uikit'

export const ExchangeLayout = ({ children }: React.PropsWithChildren) => {
  const { t } = useTranslation()
    >
      {children}
    </Swap.Page>
  )
}
