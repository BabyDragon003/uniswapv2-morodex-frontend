import styled from 'styled-components'
import { Flex, TwitterIcon, TelegramIcon, RedditIcon, Link } from '@pancakeswap/uikit'
import { useRouter } from 'next/router'

const StyledLink = styled(Link)`
  &:hover {
    > svg {
      fill: ${({ theme }) => theme.colors.secondary};
    }
  }
`

const StyledSocialIcon = styled(Flex)`
  position: static;
  top: 0px;
    }
  }
`

const BLOG_URL = 'https://blog.dapp-frontend-prince.web.app'

const SocialIcon = () => {
  const router = useRouter()
  return (
    <StyledSocialIcon>
      <StyledLink external href={`https://twitter.com/share?url=${BLOG_URL}${router.asPath}`}>
        <TwitterIcon width={40} />
      </StyledLink>
      <StyledLink external href={`https://telegram.me/share/url?url=${BLOG_URL}${router.asPath}`}>
        <TelegramIcon width={40} />
      </StyledLink>
      <StyledLink external href={`https://reddit.com/submit?url=${BLOG_URL}${router.asPath}`}>
        <RedditIcon width={40} />
      </StyledLink>
    </StyledSocialIcon>
  )
}

export default SocialIcon
