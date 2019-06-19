import { Currency } from '@pancakeswap/aptos-swap-sdk'
import styled from 'styled-components'
import { CurrencyLogo } from './CurrencyLogo'

const Wrapper = styled.div<{ margin: boolean }>`
  display: flex;
  flex-direction: row;
  margin-right: ${({ margin }) => margin && '4px'};
`

      {currency1 && <CurrencyLogo currency={currency1} size={`${size.toString()}px`} />}
    </Wrapper>
  )
}
