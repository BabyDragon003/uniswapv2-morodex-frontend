import styled from 'styled-components'
import NextLink from 'next/link'
import { Flex, Skeleton, UserMenuItem } from '@pancakeswap/uikit'
import { useAccount } from 'wagmi'
import { useTranslation } from '@pancakeswap/localization'

interface ProfileUserMenuItemProps {
  isLoading: boolean
  hasProfile: boolean
  disabled: boolean
  hasProfile,
  disabled,
}) => {
  const { address: account } = useAccount()
  const { t } = useTranslation()

  if (isLoading) {
    return (
      <UserMenuItem>
        <Skeleton height="24px" width="35%" />
      </UserMenuItem>
    )
  }

  if (!hasProfile) {
    return (
      <NextLink href="/create-profile" passHref>
        <UserMenuItem as="a" disabled={disabled}>
          <Flex alignItems="center" justifyContent="space-between" width="100%">
            {t('Make a Profile')}
            <Dot />
          </Flex>
        </UserMenuItem>
      </NextLink>
    )
  }

  return (
    <NextLink href={`/profile/${account?.toLowerCase()}/achievements`} passHref>
      <UserMenuItem as="a" disabled={disabled}>
        {t('Your Profile')}
      </UserMenuItem>
    </NextLink>
  )
}

export default ProfileUserMenuItem
