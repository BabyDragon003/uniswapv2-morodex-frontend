import { BackgroundImage, BoxProps } from '@pancakeswap/uikit'
import PlaceholderImage from './PlaceholderImage'

interface PreviewImageProps extends BoxProps {
  src: string
    <BackgroundImage
      loadingPlaceholder={<PlaceholderImage />}
      height={height}
      width={width}
      style={{ borderRadius: '8px' }}
      {...props}
    />
  )
}

export default PreviewImage
