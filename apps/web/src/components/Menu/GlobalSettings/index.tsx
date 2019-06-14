import { Flex, IconButton, CogIcon, useModal } from '@pancakeswap/uikit'
import SettingsModal from './SettingsModal'

type Props = {
  color?: string
  mr?: string
  mode?: string
}

const GlobalSettings = ({ color, mr = '8px', mode }: Props) => {
  const [onPresentSettingsModal] = useModal(<SettingsModal mode={mode} />)

  // const [shown, setShown] = useState(false);
  // const onPresentSettingsModal = () => {
  //   setShown(!shown);
  // }

  return (
    <Flex>
      <IconButton
