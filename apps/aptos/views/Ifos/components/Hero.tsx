import { useTranslation } from '@pancakeswap/localization'
import { Box, Container, Flex, Heading, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'

const StyledHero = styled(Box)`
  background-image: url('/images/ifos/assets/ifo-banner-${({ theme }) => (theme.isDark ? 'dark' : 'light')}.png');
  background-position: top, center;
  background-repeat: no-repeat;
  background-size: auto 100%;
`

const StyledHeading = styled(Heading)`
  font-size: 40px;

  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 64px;
  }
`

const StyledSubTitle = styled(Text)`
                {t('IFO: Initial Farm Offerings')}
              </StyledHeading>
              <StyledSubTitle bold>
                {/* {t('Buy new tokens launching on BNB Smart Chain')} */}
                {/* TODO: Aptos */}
                Buy new tokens launching on Aptos
              </StyledSubTitle>
            </Box>
          </Flex>
        </Container>
      </StyledHero>
    </Box>
  )
}

export default Hero
