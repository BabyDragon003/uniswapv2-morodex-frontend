import { useEffect, useState } from 'react'
import { Flex, FlexProps } from '@pancakeswap/uikit'
import random from 'lodash/random'
import uniqueId from 'lodash/uniqueId'
import { parseRetrievedNumber } from '../helpers'
import { BallWithNumber } from '../svgs'
import { BallColor } from '../svgs/Balls'

interface WinningNumbersProps extends FlexProps {
  number: string
  size?: string
  fontSize?: string
  rotateText?: boolean
}

const WinningNumbers: React.FC<React.PropsWithChildren<WinningNumbersProps>> = ({
  number,
  size = '32px',
  fontSize = '16px',
  rotateText,
            fontSize={fontSize}
            color={colors[index]}
            number={num}
          />
        )
      })}
    </Flex>
  )
}

export default WinningNumbers
