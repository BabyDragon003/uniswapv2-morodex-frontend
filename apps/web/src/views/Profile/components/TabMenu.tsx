import { useState, useEffect } from 'react'
import { useTranslation } from '@pancakeswap/localization'
import styled from 'styled-components'
import { Flex, NextLinkFromReactRouter } from '@pancakeswap/uikit'
import { useRouter } from 'next/router'

const Tab = styled.button<{ $active: boolean }>`
  display: inline-flex;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease-out;
`

const TabMenu = () => {
  const { t } = useTranslation()
  const { pathname, query } = useRouter()
  const { accountAddress } = query
  const [achievementsActive, setIsAchievementsActive] = useState(pathname.includes('achievements'))

  useEffect(() => {
    setIsAchievementsActive(pathname.includes('achievements'))
  }, [pathname])

  return (
    <Flex>
      <Tab
        onClick={() => setIsAchievementsActive(false)}
        $active={!achievementsActive}
        as={NextLinkFromReactRouter}
        to={`/profile/${accountAddress}`}
      >
        NFTs
      </Tab>
      <Tab
        onClick={() => setIsAchievementsActive(true)}
        $active={achievementsActive}
        as={NextLinkFromReactRouter}
        to={`/profile/${accountAddress}/achievements`}
      >
        {t('Achievements')}
      </Tab>
    </Flex>
  )
}

export default TabMenu
