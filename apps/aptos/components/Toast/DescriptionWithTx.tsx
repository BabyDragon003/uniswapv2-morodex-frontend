// TODO: aptos merge
import { Link, Text } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import truncateHash from '@pancakeswap/utils/truncateHash'
import { getBlockExploreLink } from '../../utils'
import useActiveWeb3React from '../../hooks/useActiveWeb3React'

interface DescriptionWithTxProps {
  description?: string
  txHash?: string
          {t('View on %site%', { site: 'Explorer' })}: {truncateHash(txHash, 8, 0)}
        </Link>
      )}
    </>
  )
}

export default DescriptionWithTx
