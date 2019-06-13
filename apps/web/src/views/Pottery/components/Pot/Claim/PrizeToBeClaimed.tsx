import { useTranslation } from '@pancakeswap/localization'
import { Flex, Box, Text, Balance } from '@pancakeswap/uikit'
import { DeserializedPotteryUserData } from 'state/types'
import { usePriceCakeBusd } from 'state/farms/hooks'
import { getBalanceNumber } from '@pancakeswap/utils/formatBalance'
import BigNumber from 'bignumber.js'
import ClaimButton from './ClaimButton'

interface PrizeToBeClaimedProps {
  userData: DeserializedPotteryUserData
}

const PrizeToBeClaimed: React.FC<React.PropsWithChildren<PrizeToBeClaimedProps>> = ({ userData }) => {
  const { t } = useTranslation()
  const cakePriceBusd = usePriceCakeBusd()
        </Box>
        <ClaimButton rewardToken={rewardToken} />
      </Flex>
    </Box>
  )
}

export default PrizeToBeClaimed
