import { useEffect } from 'react'
import { useParticleBurst } from '@pancakeswap/uikit'
import { useRouter } from 'next/router'

const disableWhenNotChristmas = () => {
  const today = new Date()
  const month = today.getMonth() + 1
  const day = today.getDate()

  if (month !== 12) {
    return true
  }

  if (![24, 25].includes(day)) {
    return true
  }

  return false
}

