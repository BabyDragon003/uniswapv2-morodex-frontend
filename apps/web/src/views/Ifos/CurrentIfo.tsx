import { useMemo } from 'react'
import useGetPublicIfoV3Data from 'views/Ifos/hooks/v3/useGetPublicIfoData'
import useGetWalletIfoV3Data from 'views/Ifos/hooks/v3/useGetWalletIfoData'

import { Ifo } from 'config/constants/types'

import { IfoCurrentCard } from './components/IfoFoldableCard'
import IfoContainer from './components/IfoContainer'
import IfoSteps from './components/IfoSteps'

interface TypeProps {
  activeIfo: Ifo
}

const CurrentIfo: React.FC<React.PropsWithChildren<TypeProps>> = ({ activeIfo }) => {
          isLive={publicIfoData.status === 'live'}
          hasClaimed={poolBasic.hasClaimed || poolUnlimited.hasClaimed}
          isCommitted={isCommitted}
          ifoCurrencyAddress={activeIfo.currency.address}
        />
      }
    />
  )
}

export default CurrentIfo
