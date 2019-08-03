import { IPFS_GATEWAY } from '../index'
import { Team } from './types'

const teams: Team[] = [
  {
    id: 1,
    name: 'Syrup Storm',
    description: "The storm's a-comin! Watch out! These bulls are stampeding in a syrupy surge!",
    images: {
      lg: 'syrup-storm-lg.png',
      md: 'syrup-storm-md.png',
      sm: 'syrup-storm-sm.png',
      alt: 'syrup-storm-alt.png',
      ipfs: `${IPFS_GATEWAY}/QmXKzSojwzYjtDCVgR6mVx7w7DbyYpS7zip4ovJB9fQdMG/syrup-storm.png`,
    },
    background: 'syrup-storm-bg.svg',
    textColor: '#191326',
    users: 0,
    points: 0,
  },
  {
    id: 2,
    name: 'Fearsome Flippers',
    description: "The flippening is coming. Don't get in these bunnies' way, or you'll get flipped, too!",
    images: {
  },
]

export default teams
