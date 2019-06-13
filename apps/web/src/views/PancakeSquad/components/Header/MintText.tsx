import { Flex, lightColors, Text } from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'

import { SaleStatusEnum, UserStatusEnum } from '../../types'

type PreEventProps = {
  t: ContextApi['t']
  saleStatus: SaleStatusEnum
  userStatus: UserStatusEnum
  numberTicketsOfUser: number
  numberTokensOfUser: number
}

const MintText: React.FC<React.PropsWithChildren<PreEventProps>> = ({
  t,
        </Text>
        <Text fontSize="16px" color={numberTicketsOfUser > 0 ? lightColors.warning : lightColors.failure} bold>
          {numberTicketsOfUser}
        </Text>
      </Flex>
      {saleStatus === SaleStatusEnum.Claim && (isUserUnconnected || hasNoTicketOrToken) && (
        <Text mt="24px" fontSize="16px" color={lightColors.warning} bold>
          {isUserUnconnected
            ? t('Redeem Tickets to claim NFTs')
            : t('Sorry, you can’t claim any NFTs! Better luck next time.')}
        </Text>
      )}
    </Flex>
  ) : null
}

export default MintText
