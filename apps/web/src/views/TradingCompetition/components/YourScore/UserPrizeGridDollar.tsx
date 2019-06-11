import { Text, Skeleton } from '@pancakeswap/uikit'

interface UserPrizeGridDollarProps {
  dollarValueOfTokensReward: number
}
      ~{dollarValueOfTokensReward.toFixed(2)} USD
    </Text>
  ) : (
    <Skeleton height={24} width={80} />
  )
}

export default UserPrizeGridDollar
