import AddressInputSelect from 'components/AddressInputSelect'
import { useRouter } from 'next/router'

const SearchBar: React.FC<React.PropsWithChildren> = (props) => {
  const router = useRouter()

  const handleAddressClick = (value: string) => {
    router.push(`/profile/${value}`)
  }

