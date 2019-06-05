import { useState, useEffect } from 'react'
import { API_PROFILE } from 'config/constants/endpoints'

export const useTeamInformation = (competitionId: number) => {
  const [globalLeaderboardInformation, setGlobalLeaderboardInformation] = useState(null)

  // 1. Storm
  const [team1LeaderboardInformation, setTeam1LeaderboardInformation] = useState({ teamId: 1, leaderboardData: null })
  // 2. Flippers
  const [team2LeaderboardInformation, setTeam2LeaderboardInformation] = useState({ teamId: 2, leaderboardData: null })
      try {
        const res = await fetch(`${API_PROFILE}/api/leaderboard/${competitionId}/team/${teamId}`)
        const data = await res.json()
        callBack(data)
      } catch (e) {
        console.error(e)
      }
    }

    fetchTeamsLeaderboardStats(1, (data) =>
      setTeam1LeaderboardInformation((prevState) => {
        return { ...prevState, leaderboardData: data }
      }),
    )
    fetchTeamsLeaderboardStats(2, (data) =>
      setTeam2LeaderboardInformation((prevState) => {
        return { ...prevState, leaderboardData: data }
      }),
    )
    fetchTeamsLeaderboardStats(3, (data) =>
      setTeam3LeaderboardInformation((prevState) => {
        return { ...prevState, leaderboardData: data }
      }),
    )
    fetchGlobalLeaderboardStats()
  }, [competitionId, setTeam1LeaderboardInformation, setTeam2LeaderboardInformation, setTeam3LeaderboardInformation])

  return {
    team1LeaderboardInformation,
    team2LeaderboardInformation,
    team3LeaderboardInformation,
    globalLeaderboardInformation,
  }
}
