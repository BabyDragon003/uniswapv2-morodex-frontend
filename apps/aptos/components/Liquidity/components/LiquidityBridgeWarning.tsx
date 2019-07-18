import { Currency } from '@pancakeswap/aptos-swap-sdk'
import useBridgeInfo from 'components/Swap/hooks/useBridgeInfo'
import { Message, Flex, Text, Link } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'

const LiquidityBridgeWarning = ({ currency }: { currency?: Currency }) => {
  const { t } = useTranslation()
  const { showBridgeWarning, bridgeResult } = useBridgeInfo({ currency })

  return (
    <>
      {showBridgeWarning && (
        <Message variant="warning" mb="20px">
          <Flex>
            <Text fontSize="12px" color="warning" m="auto">
        </Message>
      )}
    </>
  )
}

export default LiquidityBridgeWarning
