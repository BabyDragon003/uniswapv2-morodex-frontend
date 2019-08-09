import BigNumber from 'bignumber.js'
import { useTranslation } from '@pancakeswap/localization'
import { Button, Flex, HelpIcon, useTooltip } from '@pancakeswap/uikit'
import { getBalanceNumber } from '@pancakeswap/utils/formatBalance'
import { useAccount } from 'wagmi'

interface ButtonMenuProps {
  cakePrice: BigNumber
  stakingTokenBalance: BigNumber
  setPrincipalFromUSDValue: (amount: string) => void
}

const ButtonMenu: React.FC<React.PropsWithChildren<ButtonMenuProps>> = ({
  cakePrice,
  stakingTokenBalance,
  setPrincipalFromUSDValue,
}) => {
  const { t } = useTranslation()
  const { address: account } = useAccount()

        width="128px"
        variant="tertiary"
        style={{ textTransform: 'uppercase' }}
        disabled={!stakingTokenBalance.isFinite() || stakingTokenBalance.lte(0) || !account}
        onClick={() => setPrincipalFromUSDValue(getBalanceNumber(stakingTokenBalance.times(cakePrice)).toString())}
      >
        {t('My Balance')}
      </Button>
      <span ref={targetRef}>
        <HelpIcon width="16px" height="16px" color="textSubtle" />
      </span>
      {tooltipVisible && tooltip}
    </Flex>
  )
}

export default ButtonMenu
