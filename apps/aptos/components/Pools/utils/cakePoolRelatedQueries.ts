import { FARMS_NAME_TAG, FARMS_USER_INFO } from 'state/farms/constants'

const cakePoolRelatedQueries = (account) => (query) => {
  const queryObject = query.queryKey?.[0]


  return isMasterchefQuery || isPoolUserInfoHandleQuery || isBalances
}

export default cakePoolRelatedQueries
