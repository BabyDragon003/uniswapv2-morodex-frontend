import { ReactNode } from 'react'
import { Box, Grid, GridProps, Heading, Message, MessageText } from '@pancakeswap/uikit'
import DELIST_COLLECTIONS from 'config/constants/nftsCollections/delist'
import { useTranslation } from '@pancakeswap/localization'

interface MarketPageTitleProps extends GridProps {
  title: string
  description?: ReactNode
  address?: string
}

const MarketPageTitle: React.FC<React.PropsWithChildren<MarketPageTitleProps>> = ({
  title,
  description,
  children,
        {DELIST_COLLECTIONS[address] ? (
          <Message variant="danger">
            <MessageText>{t('This collection has been inactived for a while. Trade at your own risk.')}</MessageText>
          </Message>
        ) : (
          description
        )}
      </Box>
      <Box>{children}</Box>
    </Grid>
  )
}

export default MarketPageTitle
