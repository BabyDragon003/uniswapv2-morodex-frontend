import styled from 'styled-components'
import { ButtonMenu, ButtonMenuItem } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { useRouter } from 'next/router'
import Link from 'next/link'

const StyledNav = styled.nav`
  margin-bottom: 40px;
`

  return 0
}

const Nav = () => {
  const { pathname } = useRouter()
  const { t } = useTranslation()
  return (
    <StyledNav>
      <ButtonMenu activeIndex={getActiveIndex(pathname)} scale="sm" variant="subtle">
        <Link href="/swap" passHref>
          <ButtonMenuItem id="swap-nav-link" as="a">
            {t('Swap')}
          </ButtonMenuItem>
        </Link>
        <Link href="/pool" passHref>
          <ButtonMenuItem id="pool-nav-link" as="a">
            {t('Liquidity')}
          </ButtonMenuItem>
        </Link>
      </ButtonMenu>
    </StyledNav>
  )
}

export default Nav
