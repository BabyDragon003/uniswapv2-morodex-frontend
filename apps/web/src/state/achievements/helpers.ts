import { request, gql } from 'graphql-request'
import { campaignMap } from 'config/constants/campaigns'
import { TranslateFunction } from '@pancakeswap/localization'
import { GRAPH_API_PROFILE } from 'config/constants/endpoints'
import { Achievement } from 'state/types'
import { getAchievementTitle, getAchievementDescription } from 'utils/achievements'

interface UserPointIncreaseEvent {
  campaignId: string
  id: string // wallet address
  points: string
}

/**
 * Gets all user point increase events on the profile filtered by wallet address
 */
export const getUserPointIncreaseEvents = async (account: string): Promise<UserPointIncreaseEvent[]> => {
  try {
    const { user } = await request(
      GRAPH_API_PROFILE,
      gql`
        query getUserPointIncreaseEvents($account: ID!) {
          user(id: $account) {
            points {
              id

  return pointIncreaseEvents.reduce((accum, userPoint) => {
    if (!campaignMap.has(userPoint.campaignId)) {
      return accum
    }

    const campaignMeta = campaignMap.get(userPoint.campaignId)

    accum.push({
      id: userPoint.campaignId,
      type: campaignMeta.type,
      address: userPoint.id,
      title: getAchievementTitle(campaignMeta, t),
      description: getAchievementDescription(campaignMeta, t),
      badge: campaignMeta.badge,
      points: Number(userPoint.points),
    })
    return accum
  }, [])
}
