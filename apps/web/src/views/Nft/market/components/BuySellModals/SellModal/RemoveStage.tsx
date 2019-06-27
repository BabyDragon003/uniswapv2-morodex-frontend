import { Flex, Box, Text, Button } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { Divider } from '../shared/styles'

interface RemoveStageProps {
  continueToNextStage: () => void
}

const RemoveStage: React.FC<React.PropsWithChildren<RemoveStageProps>> = ({ continueToNextStage }) => {
  const { t } = useTranslation()
  return (
    <>
      <Box p="16px" maxWidth="360px">
        <Text fontSize="24px" bold>
          {t('Remove from Market')}
}

export default RemoveStage
