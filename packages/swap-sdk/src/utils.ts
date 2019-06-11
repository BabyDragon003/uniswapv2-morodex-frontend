import { getAddress } from '@ethersproject/address'
import invariant from 'tiny-invariant'
import warning from 'tiny-warning'

// warns if addresses are not checksummed
  } catch (error) {
    invariant(false, `${address} is not a valid address.`)
  }
}
