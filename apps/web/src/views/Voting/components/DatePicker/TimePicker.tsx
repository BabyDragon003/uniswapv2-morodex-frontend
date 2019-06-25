import { useTranslation } from '@pancakeswap/localization'
import DatePicker, { DatePickerProps } from './DatePicker'

const TimePicker: React.FC<React.PropsWithChildren<DatePickerProps>> = (props) => {
  const { t } = useTranslation()
      timeCaption={t('Time')}
      dateFormat="ppp"
      {...props}
    />
  )
}

export default TimePicker
