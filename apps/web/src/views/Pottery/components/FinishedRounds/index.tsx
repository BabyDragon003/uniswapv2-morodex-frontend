import styled from 'styled-components'
import { Flex, PageSection } from '@pancakeswap/uikit'
import useTheme from 'hooks/useTheme'
import { useTranslation } from '@pancakeswap/localization'
import { OutlineText } from 'views/Pottery/components/TextStyle'
import { FINISHED_ROUNDS_BG, FINISHED_ROUNDS_BG_DARK } from 'views/Lottery/pageSectionStyles'
import AllHistoryCard from './AllHistoryCard'

const FinishedRoundsBg = styled(Flex)<{ isDark: boolean }>`
  position: relative;
  width: 100%;
  flex-direction: column;
  background: ${({ isDark }) => (isDark ? FINISHED_ROUNDS_BG_DARK : FINISHED_ROUNDS_BG)};
`

const FinishedRoundsContainer = styled(Flex)`
  flex-direction: column;
  margin: auto;
  width: 100%;
`
export default FinishedRounds
