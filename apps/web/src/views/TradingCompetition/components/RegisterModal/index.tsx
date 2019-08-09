import styled from 'styled-components'
import { Modal, Button, NoProfileAvatarIcon, Flex } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import ProfileAvatarWithTeam from 'components/ProfileAvatarWithTeam'
import { CompetitionProps } from '../../types'
import MakeProfile from './MakeProfile'
import ReactivateProfile from './ReactivateProfile'
import RegisterWithProfile from './RegisterWithProfile'

const AvatarWrapper = styled.div`
  height: 64px;
  width: 64px;
  margin-bottom: 8px;
`

const StyledNoProfileAvatarIcon = styled(NoProfileAvatarIcon)`
  width: 100%;
  height: 100%;
`


  return (
    <Modal title={t('Register')} onDismiss={onDismiss}>
      <Flex flexDirection="column" alignItems="center" maxWidth="400px">
        <AvatarWrapper>
          {profile ? <ProfileAvatarWithTeam profile={profile} /> : <StyledNoProfileAvatarIcon />}
        </AvatarWrapper>
        {modalInner()}
      </Flex>
      <Button variant="text" onClick={onDismiss}>
        {t('Close Window')}
      </Button>
    </Modal>
  )
}

export default RegisterModal
