import styled, { keyframes } from 'styled-components'
import { Flex, Button, Link } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { TicketCard } from '../../svgs'

const mainTicketAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(6deg);
  }
  to {
    transform: rotate(0deg);
  }  
`

const TicketContainer = styled(Flex)`
  animation: ${mainTicketAnimation} 3s ease-in-out infinite;
`
const TicketSvgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(-4deg);
const StakeToWinButton: React.FC<React.PropsWithChildren<StakeToWinButtonProps>> = ({ handleScroll }) => {
  const { t } = useTranslation()

  return (
    <TicketContainer
      position="relative"
      mt="24px"
      width={['240px', '288px']}
      height={['94px', '113px']}
      alignItems="center"
      justifyContent="center"
    >
      <ButtonWrapper>
        <StyledButton width="200px" onClick={handleScroll}>
          {t('Stake to WIN!')}
        </StyledButton>
      </ButtonWrapper>
      <TicketSvgWrapper>
        <TicketCard width="100%" />
      </TicketSvgWrapper>
    </TicketContainer>
  )
}

export default StakeToWinButton
