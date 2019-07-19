import React from 'react'
import styled from 'styled-components'
import { useTranslation } from '@pancakeswap/localization'
import { Flex, Spinner, Pool } from '@pancakeswap/uikit'
import { Token } from '@pancakeswap/sdk'
import TableHeader from '../../MigrationTable/TableHeader'
import EmptyText from '../../MigrationTable/EmptyText'
import TableStyle from '../../MigrationTable/StyledTable'
import PoolRow from './PoolRow'

interface PoolsTableProps {
  pools: Pool.DeserializedPool<Token>[]
  userDataReady: boolean
  account: string
}

const Container = styled.div`
  overflow: hidden;
  margin-bottom: 32px;
  border-radius: 24px 24px 16px 16px;
          userDataReady &&
          pools.map((pool) => <PoolRow key={pool.vaultKey ?? pool.sousId} pool={pool} account={account} />)}
      </TableStyle>
    </Container>
  )
}

export default PoolsTable
