import styled from 'styled-components'
import { Card, CardHeader, Box, Heading, Text } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import PrizesGrid from '../../../components/PrizesInfo/PrizesGrid/PrizesGrid'
import { mboxPrizes } from '../../../../../config/constants/trading-competition/prizes'

const StyledCard = styled(Card)`
  ${({ theme }) => theme.mediaQueries.md} {
    margin-right: 40px;
    flex: 1;
  }
`

const MoboxPrizesCard = () => {
  const { t } = useTranslation()
          )}
        </Text>
      </Box>
    </StyledCard>
  )
}

export default MoboxPrizesCard
