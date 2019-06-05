import { useContext } from 'react'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { FarmsPageLayout, FarmsContext } from 'components/Farms/components/index'
import FarmCard from 'components/Farms/components/FarmCard/FarmCard'
import { usePriceCakeUsdc } from 'hooks/useStablePrice'
import { getDisplayApr } from 'components/Farms/components/getDisplayApr'
import { FarmWithStakedValue } from '@pancakeswap/farms'

const FarmsPage = () => {
  const { account } = useActiveWeb3React()
          account={account}
          removed={false}
        />
      ))}
    </>
  )
}

FarmsPage.Layout = FarmsPageLayout

export default FarmsPage
