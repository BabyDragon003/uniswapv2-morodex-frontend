import { useTranslation, ContextData, TranslationKey } from '@pancakeswap/localization'
import { createElement, Fragment } from 'react'

export interface TransProps extends ContextData {
  children: TranslationKey
  }
  return createElement(Fragment, null, t(children, props))
}
