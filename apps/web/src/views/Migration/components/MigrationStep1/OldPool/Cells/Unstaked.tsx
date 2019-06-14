import React from 'react'
import styled from 'styled-components'
import { Token } from '@pancakeswap/sdk'
import { Pool } from '@pancakeswap/uikit'

import UnstakeButton from '../UnstakeButton'

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 14px 0 0;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin: 0 14px 0 0;
    align-items: center;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    margin-right: 32px;
  }
