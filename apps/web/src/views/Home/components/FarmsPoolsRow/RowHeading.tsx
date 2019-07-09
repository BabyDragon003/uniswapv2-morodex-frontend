import { Heading, TextProps } from '@pancakeswap/uikit'
import useTheme from 'hooks/useTheme'

interface HeadingProps extends TextProps {
  text: string
  const remainingWords = split.slice(1).join(' ')

  return (
    <Heading {...props}>
      {firstWord}
      <span style={{ color: theme.colors.secondary }}> {remainingWords}</span>
    </Heading>
  )
}

export default RowHeading
