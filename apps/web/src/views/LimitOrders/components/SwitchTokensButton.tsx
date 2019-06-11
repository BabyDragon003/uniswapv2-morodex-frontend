import React, { useCallback } from 'react'
import { ArrowDownIcon, IconButton, ArrowUpDownIcon } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { AutoColumn } from 'components/Layout/Column'
import { AutoRow } from 'components/Layout/Row'
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    .icon-down {
      display: none;
      fill: white;
    }
    .icon-up-down {
      display: block;
      fill: white;
    }
  }
`

interface SwitchIconButtonProps {
  color: 'primary' | 'text'
  handleSwitchTokens: () => void
}

const SwitchIconButton: React.FC<React.PropsWithChildren<SwitchIconButtonProps>> = ({ handleSwitchTokens, color }) => {
  const handleOnClick = useCallback(() => handleSwitchTokens?.(), [handleSwitchTokens])

  return (
    <AutoColumn justify="space-between">
      <AutoRow justify="center" style={{ padding: '0 1rem' }}>
        <StyledButton variant="light" scale="sm" onClick={handleOnClick}>
          <ArrowDownIcon className="icon-down" color={color} />
          <ArrowUpDownIcon className="icon-up-down" color={color} />
        </StyledButton>
      </AutoRow>
    </AutoColumn>
  )
}

export default SwitchIconButton
