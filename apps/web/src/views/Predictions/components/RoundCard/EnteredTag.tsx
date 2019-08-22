import { useMemo } from 'react'
import { BigNumber } from '@ethersproject/bignumber'
import { CheckmarkCircleIcon, CheckmarkCircleFillIcon, Tag, useTooltip } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { ethersToBigNumber } from '@pancakeswap/utils/bigNumber'
import { REWARD_RATE } from 'state/predictions/config'
import { useConfig } from 'views/Predictions/context/ConfigProvider'
import { formatTokenv2 } from '../../helpers'

interface EnteredTagProps {
  amount?: BigNumber
  hasClaimed?: boolean
  multiplier: string
}

      tokenAmount = amount
    }
    return formatTokenv2(tokenAmount, token.decimals, displayedDecimals)
  }, [amount, displayedDecimals, hasClaimed, multiplier, token])

  const { targetRef, tooltipVisible, tooltip } = useTooltip(
    <div style={{ whiteSpace: 'nowrap' }}>{`${formattedAmount} ${token.symbol}`}</div>,
    { placement: 'bottom' },
  )

  return (
    <>
      <span ref={targetRef}>
        <Tag
          variant="secondary"
          fontWeight="bold"
          textTransform="uppercase"
          outline={!hasClaimed}
          startIcon={hasClaimed ? <CheckmarkCircleFillIcon width="18px" /> : <CheckmarkCircleIcon width="18px" />}
        >
          {hasClaimed ? t('Claimed') : t('Entered')}
        </Tag>{' '}
      </span>{' '}
      {tooltipVisible && tooltip}
    </>
  )
}

export default EnteredTag
