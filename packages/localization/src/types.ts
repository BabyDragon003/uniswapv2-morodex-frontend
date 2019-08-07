import { Language } from '@pancakeswap/uikit'

import translations from './config/translations.json'

export type ContextData = {
  [key: string]: string | number
}

export interface ProviderState {
  isFetching: boolean
export type TranslationKey = keyof typeof translations | (string & MaybeObject)

export type TranslateFunction = (key: TranslationKey, data?: ContextData) => string
