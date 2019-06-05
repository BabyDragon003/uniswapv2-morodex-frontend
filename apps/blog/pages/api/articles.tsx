import qs from 'qs'
import { NextApiRequest, NextApiResponse } from 'next'

// eslint-disable-next-line consistent-return
export const articles = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!process.env.STRAPI_PREVIEW_SECRET || !req.query) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  const mergedOptions = {
  }

  const data = await response.json()
  return res.status(200).json(data)
}

export default articles
