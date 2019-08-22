import { Heading, TextProps } from '@pancakeswap/uikit'
import useTheme from 'hooks/useTheme'

interface HeadingProps extends TextProps {
  text: string
}

const RowHeading: React.FC<React.PropsWithChildren<HeadingProps>> = ({ text, ...props }) => {
  const { theme } = useTheme()
  const split = text.split(' ')
  const firstWord = split[0]
  const remainingWords = split.slice(1).join(' ')

  return (
    <Heading {...props}>
