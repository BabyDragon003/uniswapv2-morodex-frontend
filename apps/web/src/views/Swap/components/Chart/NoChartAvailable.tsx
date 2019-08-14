import { Flex, Text } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'

interface NoChartAvailableProps {
  token0Address: string
  token1Address: string
  pairAddress: string
  isMobile: boolean
}

        <Text
          textAlign={isMobile ? 'center' : 'left'}
          mb={['8px', '8px', '0px']}
          color="textSubtle"
          small
          style={isMobile && { wordSpacing: '100vw' }}
        >
          Token0: {token0Address ?? 'null'}
        </Text>
        <Text
          textAlign={isMobile ? 'center' : 'left'}
          mb={['8px', '8px', '0px']}
          color="textSubtle"
          small
          style={isMobile && { wordSpacing: '100vw' }}
        >
          Token1: {token1Address ?? 'null'}
        </Text>
        <Text
          textAlign={isMobile ? 'center' : 'left'}
          mb={['8px', '8px', '0px']}
          color="textSubtle"
          small
          style={isMobile && { wordSpacing: '100vw' }}
        >
          Pair: {pairAddress ?? 'null'}
        </Text>
      </Flex>
    </>
  )
}

export default NoChartAvailable
