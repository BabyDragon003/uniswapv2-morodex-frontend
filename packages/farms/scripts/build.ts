/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import path from 'path'
import fs from 'fs'
import farm1 from '../constants/1'
import farm5 from '../constants/5'
import farm97 from '../constants/97'
import farm56 from '../constants/56'

import lpHelpers1 from '../constants/priceHelperLps/1'
import lpHelpers5 from '../constants/priceHelperLps/5'
import lpHelpers97 from '../constants/priceHelperLps/97'
import lpHelpers56 from '../constants/priceHelperLps/56'

const chains = [
  [1, farm1, lpHelpers1],
  [5, farm5, lpHelpers5],
  [56, farm56, lpHelpers56],
  [97, farm97, lpHelpers97],
]

export const saveList = async () => {
  console.info('save farm config...')
  try {
    fs.mkdirSync(`${path.resolve()}/lists`)
