import { Flex, Skeleton } from '@pancakeswap/uikit'

export const SkeletonCardActions = () => {
  return <Skeleton height="48px" />
}
        <Skeleton width="90%" />
      </Flex>
      <Flex justifyContent="space-between" alignItems="center">
        <Skeleton variant="circle" width="32px" height="32px" mr="16px" />
        <Skeleton width="90%" />
      </Flex>
    </div>
  )
}

export const SkeletonCardDetails = () => {
  return (
    <div>
      <Skeleton mb="8px" />
      <Skeleton />
    </div>
  )
}

export default null
