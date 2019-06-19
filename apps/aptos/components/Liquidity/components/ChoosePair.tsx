import { useTranslation } from '@pancakeswap/localization'
import { ChoosePairView } from '@pancakeswap/uikit/src/widgets/Liquidity'
import { CommitButton } from 'components/CommitButton'
import { useContext } from 'react'
import { CurrencySelectorContext } from '../hooks/useCurrencySelectRoute'
import { MintPairContext } from '../hooks/useMintPair'
import { CurrencySelect } from './CurrencySelect'
import LiquidityBridgeWarning from './LiquidityBridgeWarning'

export default function ChoosePair({ onNext }: { onNext: () => void }) {
        />
      }
      selectCurrencyB={
        <CurrencySelect
          onCurrencySelect={handleCurrencyBSelect}
          otherSelectedCurrency={currencyA}
          selectedCurrency={currencyB}
        />
      }
      footer={
        <>
          {[currencyA, currencyB].map((currency) => (
            <LiquidityBridgeWarning
              key={`liquidityBridgeWarning#${currency?.address || 'generic'}`}
              currency={currency}
            />
          ))}
          <CommitButton
            data-test="choose-pair-next"
            width="100%"
            variant={error ? 'danger' : 'primary'}
            onClick={onNext}
            disabled={Boolean(error)}
          >
            {error ?? t('Add Liquidity')}
          </CommitButton>
        </>
      }
    />
  )
}
