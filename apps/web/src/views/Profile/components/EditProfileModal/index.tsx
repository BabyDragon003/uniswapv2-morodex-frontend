import { InjectedModalProps, Modal } from '@pancakeswap/uikit'
import { useTranslation, ContextApi } from '@pancakeswap/localization'
import useEditProfile, { Views } from './reducer'
import StartView from './StartView'
import PauseProfileView from './PauseProfileView'
import ChangeProfilePicView from './ChangeProfilePicView'
import ApproveCakeView from './ApproveCakeView'

interface EditProfileModalProps extends InjectedModalProps {
  onSuccess?: () => void
}

const viewTitle = (t: ContextApi['t'], currentView: Views) => {
  switch (currentView) {
    case Views.START:
      return t('Edit Profile')
    case Views.CHANGE:
      return t('Change Profile Pic')
    case Views.REMOVE:
      return t('Remove Profile Pic')
    case Views.APPROVE:
      return t('Enable CAKE')
    default:
      return ''
  }
