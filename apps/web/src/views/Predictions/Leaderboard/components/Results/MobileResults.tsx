import { Box } from '@pancakeswap/uikit'
import { PredictionUser } from 'state/types'
import MobileRow from './MobileRow'

interface MobileResultsProps {
      {results.map((result, index) => (
        <MobileRow key={result.id} rank={index + 4} user={result} />
      ))}
    </Box>
  )
}

export default MobileResults
