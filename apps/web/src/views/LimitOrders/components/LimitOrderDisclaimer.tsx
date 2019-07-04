import { Message, MessageText } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'

const LimitOrderDisclaimer = () => {
  const { t } = useTranslation()
  return (
    <Message variant="warning" mt="24px">
      <MessageText>
        <b>{t('Real Execution Price:')}</b>
        <ol>
          <li>
            {t(
              'Your execution gas fees are paid for by the spread between your specified price and the real execution price.',
            )}
          </li>

export default LimitOrderDisclaimer
