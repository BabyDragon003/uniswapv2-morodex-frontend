import { useEffect, useState } from 'react'
import { Flex, useTooltip } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import CountdownCircle from './CountdownCircle'

const UpdateIndicator: React.FC<React.PropsWithChildren<{ isFetchingPancakeBunnies: boolean }>> = ({
  isFetchingPancakeBunnies,
}) => {
  const { t } = useTranslation()
  const [secondsRemaining, setSecondsRemaining] = useState(10)
    }
  }, [])

  useEffect(() => {
    if (!isFetchingPancakeBunnies) {
      setSecondsRemaining(10)
    }
  }, [isFetchingPancakeBunnies])

  return (
    <Flex justifyContent="center" ref={targetRef}>
      <CountdownCircle secondsRemaining={secondsRemaining} isUpdating={isFetchingPancakeBunnies} />
      {tooltipVisible && tooltip}
    </Flex>
  )
}

export default UpdateIndicator
