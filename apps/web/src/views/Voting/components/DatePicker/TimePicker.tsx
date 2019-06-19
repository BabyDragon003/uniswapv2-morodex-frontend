import { useTranslation } from '@pancakeswap/localization'
import DatePicker, { DatePickerProps } from './DatePicker'

const TimePicker: React.FC<React.PropsWithChildren<DatePickerProps>> = (props) => {
  const { t } = useTranslation()

  return (
    <DatePicker
      showTimeSelect
      showTimeSelectOnly
