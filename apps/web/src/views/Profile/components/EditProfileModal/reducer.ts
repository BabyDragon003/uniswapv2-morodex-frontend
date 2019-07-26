import { useReducer } from 'react'

export enum Views {
  START = 'start',
  CHANGE = 'change',
  REMOVE = 'remove',
  APPROVE = 'approve',
}

export type Actions =
  | {
      type: 'set_view'
      view: Views
    }
  | {
      type: 'go_previous'
    }

export interface State {
  currentView: Views

export interface UseEditProfileResponse extends State {
  goToStart: () => void
  goToChange: () => void
  goToApprove: () => void
  goToRemove: () => void
  goPrevious: () => void
}

const useEditProfile = (): UseEditProfileResponse => {
  const [state, dispatch] = useReducer(reducer, {
    currentView: Views.START,
    previousView: null,
  })

  const goToStart = () => dispatch({ type: 'set_view', view: Views.START })
  const goToChange = () => dispatch({ type: 'set_view', view: Views.CHANGE })
  const goToRemove = () => dispatch({ type: 'set_view', view: Views.REMOVE })
  const goToApprove = () => dispatch({ type: 'set_view', view: Views.APPROVE })
  const goPrevious = () => dispatch({ type: 'go_previous' })

  return { ...state, goToStart, goToChange, goToRemove, goToApprove, goPrevious }
}

export default useEditProfile
