import { Card, CardBody, Flex, Spinner, WaitIcon, TooltipText, useTooltip, InfoIcon } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { NodeRound, BetPosition } from 'state/types'
import useTheme from 'hooks/useTheme'
import { RoundResultBox } from '../RoundResult'
import MultiplierArrow from './MultiplierArrow'
import CardHeader, { getBorderBackground } from './CardHeader'

interface CalculatingCardProps {
  round: NodeRound
  hasEnteredUp: boolean
  hasEnteredDown: boolean
}

const CalculatingCard: React.FC<React.PropsWithChildren<CalculatingCardProps>> = ({
          icon={<WaitIcon mr="4px" width="21px" />}
          title={t('Calculating')}
          epoch={round.epoch}
        />
        <CardBody p="16px">
          <MultiplierArrow isDisabled hasEntered={hasEnteredUp} />
          <RoundResultBox>
            <Flex alignItems="center" justifyContent="center" flexDirection="column">
              <Spinner size={96} />
              <Flex mt="8px" ref={targetRef}>
                <TooltipText>{t('Calculating')}</TooltipText>
                <InfoIcon ml="4px" />
              </Flex>
            </Flex>
          </RoundResultBox>
          <MultiplierArrow betPosition={BetPosition.BEAR} isDisabled hasEntered={hasEnteredDown} />
        </CardBody>
      </Card>
      {tooltipVisible && tooltip}
    </>
  )
}

export default CalculatingCard
