import { Box, BoxProps, Grid, GridProps, Skeleton } from '@pancakeswap/uikit'
import times from 'lodash/times'

interface GridPlaceholderProps extends GridProps {
  numItems?: number
}

export const GridPlaceholderItem: React.FC<React.PropsWithChildren<BoxProps>> = (props) => (
  <Box {...props}>
    <Skeleton height="258px" mb="8px" />
  </Grid>
)

export default GridPlaceholder
