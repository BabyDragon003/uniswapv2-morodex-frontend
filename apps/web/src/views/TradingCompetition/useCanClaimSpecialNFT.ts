import { useAccount } from 'wagmi'
import { useEffect, useState } from 'react'
import { API_PROFILE } from 'config/constants/endpoints'

export const useCanClaimSpecialNFT = () => {
      if (parseInt(data?.leaderboard_dar?.darVolumeRank ?? '101') <= 100) setCanClaimSpecialNFT(true)
    }
    // If user has not registered, user trading information will not be displayed and should not be fetched
    if (account) {
      fetchUserTradingStats()
    }
  }, [account])
  return canClaimSpecialNFT
}
