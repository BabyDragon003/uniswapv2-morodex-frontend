import { ImgHTMLAttributes } from 'react'
import styled from 'styled-components'
import { BunnyPlaceholderIcon } from '@pancakeswap/uikit'

interface AchievementAvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  badge?: string
}

const NoBadgePlaceholder = styled(BunnyPlaceholderIcon)`
  height: 48px;
  width: 48px;

  ${({ theme }) => theme.mediaQueries.sm} {
    height: 64px;
    width: 64px;
  }

  return <StyledAchievementAvatar src={`/images/achievements/${badge}`} alt="achievement badge" {...props} />
}

export default AchievementAvatar
