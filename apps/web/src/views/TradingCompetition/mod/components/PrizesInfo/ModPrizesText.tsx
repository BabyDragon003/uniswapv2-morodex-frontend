import { Flex, Heading, Text } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import Image from 'next/image'
import styled from 'styled-components'
import FlipperBunny from '../../../pngs/MoD-flipper.png'

const StyledFlex = styled(Flex)`
  ${({ theme }) => theme.mediaQueries.md} {
    flex: 1;
  }
`

const ImageWrapper = styled.div`
  width: 270px;
  margin: 40px auto 0;
        {t(
          'The final winning team will be the team with the highest total volume score at the end of the competition period.',
        )}
      </Text>
      <Text mt="10px">{t('In addition to token prizes there are NFT rewards:')}</Text>
      <Text>A. {t('300 newly-designed PancakeSwap NFTs to the Top 100 Traders in each team.')}</Text>
      <Text>B. {t('100 Mines of Dalarnia NFTs to the Top 100 Traders ranked by the $DAR Trading Volume.')}</Text>
      <ImageWrapper>
        <Image src={FlipperBunny} alt="Flipper bunny" width={270} height={293} />
      </ImageWrapper>
    </StyledFlex>
  )
}

export default ModPrizesText
