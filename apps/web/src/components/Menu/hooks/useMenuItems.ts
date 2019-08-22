import { useMemo } from 'react'
import { LinkStatus } from '@pancakeswap/uikit/src/widgets/Menu/types'
import { useTheme } from '@pancakeswap/hooks'
import { useTranslation } from '@pancakeswap/localization'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { useMenuItemsStatus } from './useMenuItemsStatus'
import config, { ConfigMenuItemsType } from '../config/config'

export const useMenuItems = (): ConfigMenuItemsType[] => {
  const {
    t,
    currentLanguage: { code: languageCode },
  } = useTranslation()
  const { chainId } = useActiveChainId()
  const { isDark } = useTheme()
              itemMenuStatus = <LinkStatus>{ text: t('Live'), color: 'failure' }
            } else if (itemStatus === 'vote_now') {
              itemMenuStatus = <LinkStatus>{ text: t('Vote Now'), color: 'success' }
            } else if (itemStatus === 'pot_open') {
              itemMenuStatus = <LinkStatus>{ text: t('Pot Open'), color: 'success' }
            } else if (itemStatus === 'lock_end') {
              itemMenuStatus = <LinkStatus>{ text: t('Lock End'), color: 'failure' }
            } else {
              itemMenuStatus = <LinkStatus>{ text: t('New'), color: 'success' }
            }
            return { ...innerItem, status: itemMenuStatus }
          }
          return innerItem
        })
        return { ...item, items: innerItems }
      })
    }
    return menuItems
  }, [t, menuItems, menuItemsStatus])
}
