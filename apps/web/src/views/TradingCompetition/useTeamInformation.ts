import { useState, useEffect } from 'react'
import { API_PROFILE } from 'config/constants/endpoints'

export const useTeamInformation = (competitionId: number) => {
  const [globalLeaderboardInformation, setGlobalLeaderboardInformation] = useState(null)

  // 1. Storm
  const [team1LeaderboardInformation, setTeam1LeaderboardInformation] = useState({ teamId: 1, leaderboardData: null })
  // 2. Flippers
  const [team2LeaderboardInformation, setTeam2LeaderboardInformation] = useState({ teamId: 2, leaderboardData: null })
  // 3. Cakers
  const [team3LeaderboardInformation, setTeam3LeaderboardInformation] = useState({ teamId: 3, leaderboardData: null })

  useEffect(() => {
    const fetchGlobalLeaderboardStats = async () => {
      const res = await fetch(`${API_PROFILE}/api/leaderboard/${competitionId}/global`)
      const data = await res.json()
      setGlobalLeaderboardInformation(data)
    }

    const fetchTeamsLeaderboardStats = async (teamId: number, callBack: (data: any) => void) => {
      try {
        const res = await fetch(`${API_PROFILE}/api/leaderboard/${competitionId}/team/${teamId}`)
        const data = await res.json()
        callBack(data)
    team3LeaderboardInformation,
    globalLeaderboardInformation,
  }
}
