import { Progress, ProgressProps } from '@pancakeswap/uikit'
import { useCurrentBlock } from 'state/block/hooks'

interface BlockProgressProps extends ProgressProps {
  startBlock: number
  const progress = rawProgress <= 100 ? rawProgress : 100

  return <Progress primaryStep={progress} {...props} />
}

export default BlockProgress
