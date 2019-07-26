import { ReactNode } from 'react'
import { Box, PageSection } from '@pancakeswap/uikit'
import useTheme from 'hooks/useTheme'
import { useTranslation } from '@pancakeswap/localization'
import RibbonWithImage from './RibbonWithImage'
import { LIGHTBLUEBG_DARK, LIGHTBLUEBG } from '../pageSectionStyles'
import PrizesIcon from '../svgs/PrizesIcon'

interface PrizesInfoSectionProps {
  prizesInfoComponent: ReactNode
}

const PrizesInfoSection: React.FC<React.PropsWithChildren<PrizesInfoSectionProps>> = ({ prizesInfoComponent }) => {
  const { isDark } = useTheme()
  const { t } = useTranslation()

  return (
    <>
      <PageSection
        containerProps={{ style: { marginTop: '-30px' } }}
