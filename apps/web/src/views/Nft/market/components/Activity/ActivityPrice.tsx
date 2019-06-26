import { Flex, BinanceIcon, Text, Skeleton } from '@pancakeswap/uikit'
import { multiplyPriceByAmount } from 'utils/prices'

const ActivityPrice = ({ bnbBusdPrice, price }) => {
  const priceInUsd = multiplyPriceByAmount(bnbBusdPrice, price)

  return (
    <Flex flexDirection="column" alignItems="flex-end">
      {price ? (
        <>
              {`(~$${priceInUsd.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })})`}
            </Text>
          ) : (
            <Skeleton height="18px" width="42px" />
          )}
        </>
      ) : (
        '-'
      )}
    </Flex>
  )
}

export default ActivityPrice
