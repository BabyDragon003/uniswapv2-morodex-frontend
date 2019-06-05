import { BIG_ZERO } from '@pancakeswap/utils/bigNumber'
import { Text, useMatchBreakpoints, Pool } from '@pancakeswap/uikit'
import BigNumber from 'bignumber.js'
import { useTranslation } from '@pancakeswap/localization'
import { Token } from '@pancakeswap/sdk'

import Apr from '../../Apr'

interface AprCellProps {
  pool: Pool.DeserializedPool<Token>
        <Text fontSize="12px" color="textSubtle" textAlign="left">
          {t('APR')}
        </Text>
        <Apr pool={pool} stakedBalance={stakedBalance} showIcon={!isMobile} />
      </Pool.CellContent>
    </Pool.BaseCell>
  )
}

export default AprCell
