import { Flex, Skeleton } from '@pancakeswap/uikit'

const SkeletonArticle = () => {
  return (
    <Flex flexDirection="column" padding={['24px 16px', '24px 16px', '24px 16px', '24px 16px', '24px 32px']}>
            height={['71px', '91px', '111px', '180px']}
          />
          <Flex width="100%" flexDirection="column">
            <Skeleton width={80} height={18} mb="24px" />
            <Skeleton width={280} height={24} mb={['8px', '8px', '8px', '24px']} />
            <Skeleton width="100%" height={50} display={['none', null, null, 'block']} mb="24px" />
            <Skeleton width={80} height={18} ml="auto" />
          </Flex>
        </Flex>
      ))}
    </Flex>
  )
}

export default SkeletonArticle
