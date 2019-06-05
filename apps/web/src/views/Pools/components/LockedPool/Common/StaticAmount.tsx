import { Text, Flex, Image, Box, BalanceWithLoading } from '@pancakeswap/uikit'
import Divider from 'components/Divider'
import { useTranslation } from '@pancakeswap/localization'
import { StaticAmountPropsType } from '../types'

const StaticAmount: React.FC<React.PropsWithChildren<StaticAmountPropsType>> = ({
  stakingSymbol,
  stakingAddress,
  lockedAmount,
  usdValueStaked,
          <BalanceWithLoading
            value={usdValueStaked}
            fontSize="12px"
            color="textSubtle"
            decimals={2}
            prefix="~"
            unit=" USD"
          />
        </Box>
        <Flex alignItems="center" minWidth="70px">
          <Image src={`/images/tokens/${stakingAddress}.png`} width={24} height={24} alt={stakingSymbol} />
          <Text ml="4px" bold>
            {stakingSymbol}
          </Text>
        </Flex>
      </Flex>
      <Divider />
    </>
  )
}

export default StaticAmount
