import styled from 'styled-components'
import { Flex, Heading, Skeleton, useMatchBreakpoints } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { Achievement } from 'state/types'
import AchievementCard from './AchievementCard'

const Grid = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr;
  const { isMobile } = useMatchBreakpoints()

  if (isLoading) {
    if (isMobile) {
      return <Skeleton width="100%" height="64px" />
    }
    return <Skeleton width="540px" height="64px" />
  }

  return (
    <>
      <Grid>
        {achievements.map((achievement) => (
          <AchievementCard key={achievement.id} achievement={achievement} />
        ))}
      </Grid>
      {achievements.length === 0 && (
        <Flex alignItems="center" justifyContent="center" style={{ height: '64px' }}>
          <Heading as="h5" scale="md" color="textDisabled">
            {t('No achievements yet!')}
          </Heading>
        </Flex>
      )}
    </>
  )
}

export default AchievementsList
