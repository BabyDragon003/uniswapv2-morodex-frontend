import { useTranslation } from '@pancakeswap/localization'
import { Text } from '@pancakeswap/uikit'
import styled from 'styled-components'

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
`

const NotSupport = () => {
  const { t } = useTranslation()

