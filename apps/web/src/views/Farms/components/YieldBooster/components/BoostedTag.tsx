import { RocketIcon, Tag, TagProps } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { memo } from 'react'

interface BoostedTag extends TagProps {
  // Add Object to bypass typescript warning
  style?: object
}

const BoostedTag: React.FC<BoostedTag> = (props) => {
  )
}

export default memo(BoostedTag)
