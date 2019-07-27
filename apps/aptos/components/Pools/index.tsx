import { useTranslation } from '@pancakeswap/localization'
import { Flex, Heading, PageHeader, Pool, Text, FlexLayout, ViewMode } from '@pancakeswap/uikit'
import { Coin } from '@pancakeswap/aptos-swap-sdk'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import styled from 'styled-components'

import Page from 'components/Layout/Page'
import { TokenPairImage } from 'components/TokenImage'
import { ConnectWalletButton } from 'components/ConnectWalletButton'

import NoSSR from '../NoSSR'
import PoolControls from './components/PoolControls'
import CardActions from './components/PoolCard/CardActions'
import Apr from './components/PoolCard/Apr'
import CardFooter from './components/PoolCard/CardFooter'
import PoolStatsInfo from './components/PoolCard/PoolStatsInfo'
import CakeCardActions from './components/PoolCard/CakeCardActions'
import PoolRow from './components/PoolTable/PoolRow'
import { usePoolsList } from './hooks/usePoolsList'
import isVaultPool from './utils/isVaultPool'

const CardLayout = styled(FlexLayout)`
  justify-content: center;
`

              return viewMode === ViewMode.CARD ? (
                <CardLayout>
                  {chosenPools.map((pool: Pool.DeserializedPool<Coin>) => (
                    <Pool.PoolCard<Coin>
                      key={pool.contractAddress[chainId]}
                      pool={pool}
                      isStaked={Boolean(pool?.userData?.stakedBalance?.gt(0))}
                      cardContent={
                        account ? (
                          isVaultPool() ? (
                            <CakeCardActions
                              hideLocateAddress
                              pool={pool}
                              stakedBalance={pool?.userData?.stakedBalance}
                            />
                          ) : (
                            <CardActions hideLocateAddress pool={pool} stakedBalance={pool?.userData?.stakedBalance} />
                          )
                        ) : (
                          <>
                            <Text mb="10px" textTransform="uppercase" fontSize="12px" color="textSubtle" bold>
                              {t('Start earning')}
                            </Text>
                            <ConnectWalletButton />
                          </>
                        )
                      }
                      tokenPairImage={
                        <TokenPairImage
                          primaryToken={pool.earningToken as Coin}
                          secondaryToken={pool.stakingToken as Coin}
                          width={64}
                          height={64}
                        />
                      }
                      cardFooter={
                        <CardFooter>
                          <PoolStatsInfo account={account} pool={pool} />
                        </CardFooter>
                      }
                      aprRow={
                        <Pool.AprRowWithToolTip>
                          <Apr pool={pool} stakedBalance={pool?.userData?.stakedBalance} showIcon={false} />
                        </Pool.AprRowWithToolTip>
                      }
                    />
                  ))}
                </CardLayout>
              ) : (
                <Pool.PoolsTable>
                  {chosenPools.map((pool) => (
                    <PoolRow
                      initialActivity={normalizedUrlSearch.toLowerCase() === pool.earningToken.symbol?.toLowerCase()}
                      key={pool.contractAddress[chainId]}
                      sousId={pool.sousId}
                      account={account}
                      pool={pool}
                    />
                  ))}
                </Pool.PoolsTable>
              )
            }}
          </PoolControls>
        </NoSSR>
      </Page>
    </>
  )
}

export default PoolsPage
