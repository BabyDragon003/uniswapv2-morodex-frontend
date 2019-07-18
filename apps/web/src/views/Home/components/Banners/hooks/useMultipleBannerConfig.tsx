import { ReactElement, useMemo } from 'react'
import shuffle from 'lodash/shuffle'
import CompetitionBanner from '../CompetitionBanner'
import IFOBanner from '../IFOBanner'
import PerpetualBanner from '../PerpetualBanner'
import useIsRenderIfoBanner from './useIsRenderIFOBanner'
import useIsRenderCompetitionBanner from './useIsRenderCompetitionBanner'
import AptosBanner from '../AptosBanner'

interface IBannerConfig {
  shouldRender: boolean
  banner: ReactElement
}

/**
    const NO_SHUFFLE_BANNERS: IBannerConfig[] = [
      { shouldRender: true, banner: <AptosBanner /> },
      {
        shouldRender: isRenderIFOBanner,
        banner: <IFOBanner />,
      },
    ]

    const SHUFFLE_BANNERS: IBannerConfig[] = [
      {
        shouldRender: isRenderCompetitionBanner,
        banner: <CompetitionBanner />,
      },
      {
        shouldRender: true,
        banner: <PerpetualBanner />,
      },
    ]
    return [...NO_SHUFFLE_BANNERS, ...shuffle(SHUFFLE_BANNERS)]
      .filter((bannerConfig: IBannerConfig) => bannerConfig.shouldRender)
      .map((bannerConfig: IBannerConfig) => bannerConfig.banner)
  }, [isRenderIFOBanner, isRenderCompetitionBanner])
}
