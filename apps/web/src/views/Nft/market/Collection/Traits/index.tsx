import { useRouter } from 'next/router'
import { isAddress } from 'utils'
import Container from 'components/Layout/Container'
import PancakeBunniesTraits from './PancakeBunniesTraits'
import { pancakeBunniesAddress } from '../../constants'
import CollectionTraits from './CollectionTraits'

const Traits = () => {
  const collectionAddress = useRouter().query.collectionAddress as string

}

export default Traits
