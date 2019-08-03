import { NoProfileAvatarIcon } from '@pancakeswap/uikit'
import { Profile } from 'state/types'
import styled from 'styled-components'

export interface ProfileAvatarProps {
  profile: Profile
}

const TeamAvatar = styled.img`
  border: 1px solid ${({ theme }) => theme.card.background};
  border-radius: 50%;
  bottom: 0px;
  position: absolute;
  right: 0px;
  min-width: 20px;
  min-height: 20px;
  width: 37.5%;
  height: 37.5%;
  z-index: 5;

  ${({ theme }) => theme.mediaQueries.sm} {
    border-width: 2px;
  }
`

}

export default ProfileAvatarWithTeam
