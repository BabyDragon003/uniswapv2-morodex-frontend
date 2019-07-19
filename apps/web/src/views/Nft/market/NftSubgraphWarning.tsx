import { Flex, Text, Message } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import styled from 'styled-components'

const StyledAnchor = styled.a`
  display: inline-flex;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  &:hover {
    text-decoration: underline;
  }
`

const NftSubgraphWarning: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Flex justifyContent="center" margin="24px">
      <Flex maxWidth={500}>
        <Message variant="warning">
