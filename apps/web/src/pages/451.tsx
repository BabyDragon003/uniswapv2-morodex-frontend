import { useTranslation } from '@pancakeswap/localization'
import { Text } from '@pancakeswap/uikit'
import styled from 'styled-components'

const StyledNotFound = styled.div`

const NotSupport = () => {
  const { t } = useTranslation()

  return (
    <StyledNotFound>
      <Text mb="16px">{t('Unavailable for legal reasons')}</Text>
    </StyledNotFound>
  )
}

NotSupport.pure = true

export default NotSupport
