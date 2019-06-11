import {
  Box,
  UserMenu,
  UserMenuItem,
} from '@pancakeswap/uikit'
        avatarSrc={`/images/bars.svg`}
      >
        {() =>
          (<>
            <UserMenuItem style={{ justifyContent: 'flex-start' }}
              as="a"
              href="/swap">
              Swap
            </UserMenuItem>
            <UserMenuItem style={{ justifyContent: 'flex-start' }}
              as="a"
              href="/liquidity">
              Liquidity
            </UserMenuItem>
          </>)
        }
      </UserMenu>
    </Box >
  )
}
