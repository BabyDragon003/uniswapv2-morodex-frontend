import { ElementType, ReactNode } from 'react'
import { Flex, Heading, Text, TextProps } from '@pancakeswap/uikit'
import styled from 'styled-components'

const SecondaryCard = styled(Text)`
  border: 2px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: 16px;
`

SecondaryCard.defaultProps = {
  p: '24px',
}

interface IconStatBoxProps extends TextProps {
  icon: ElementType
  title: ReactNode
  subtitle: ReactNode
  isDisabled?: boolean
}

const IconStatBox: React.FC<React.PropsWithChildren<IconStatBoxProps>> = ({
  icon: Icon,
  title,
  subtitle,
  isDisabled = false,
