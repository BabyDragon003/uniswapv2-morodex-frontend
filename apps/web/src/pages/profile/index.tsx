import { useAccount } from 'wagmi'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { nftsBaseUrl } from 'views/Nft/market/constants'

const ProfilePage = () => {
  const { address: account } = useAccount()
  const router = useRouter()

  useEffect(() => {
