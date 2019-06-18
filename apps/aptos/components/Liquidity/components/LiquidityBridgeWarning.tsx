import { Currency } from '@pancakeswap/aptos-swap-sdk'
import useBridgeInfo from 'components/Swap/hooks/useBridgeInfo'
import { Message, Flex, Text, Link } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'

      {showBridgeWarning && (
        <Message variant="warning" mb="20px">
          <Flex>
            <Text fontSize="12px" color="warning" m="auto">
              {t('Use')}
            </Text>
            <Link
              external
              m="0 4px"
              fontSize="12px"
              color="warning"
              href={bridgeResult?.url}
              style={{ textDecoration: 'underline' }}
            >
              {bridgeResult?.platform}
            </Link>
            <Text fontSize="12px" color="warning" m="auto">
              {t('to bridge %symbol%.', { symbol: currency?.symbol ?? '' })}
            </Text>
          </Flex>
        </Message>
      )}
    </>
  )
}

export default LiquidityBridgeWarning
