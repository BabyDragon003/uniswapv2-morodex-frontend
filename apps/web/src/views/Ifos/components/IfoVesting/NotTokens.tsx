import { useTranslation } from '@pancakeswap/localization'
import { Flex, Text, BunnyPlaceholderIcon } from '@pancakeswap/uikit'
import { MessageTextLink } from '../IfoCardStyles'

const NotTokens: React.FC<React.PropsWithChildren> = () => {
  const { t } = useTranslation()

  return (
    <Flex flexDirection="column">
      <BunnyPlaceholderIcon width={80} height={80} margin="auto" />
    </Flex>
  )
}

export default NotTokens
