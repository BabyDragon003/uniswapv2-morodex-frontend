import styled from 'styled-components'
import { Box, Text, Flex, Card, Button, ArrowForwardIcon } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'

const StyledImage = styled('div')`
  position: absolute;
  width: 125px;
  height: 182px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('/images/how_it_work.png');
  z-index: 1;
  right: 0;
  top: -45%;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 251px;
    height: 365px;
    top: auto;
            </Text>
          </Flex>
          <Button endIcon={<ArrowForwardIcon color="currentColor" />}>{t('Learn how')}</Button>
        </Box>
      </Card>
    </Box>
  )
}

export default HowItWork
