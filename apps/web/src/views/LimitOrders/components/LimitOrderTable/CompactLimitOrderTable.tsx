import { memo } from 'react'
import styled from 'styled-components'
import { Table, Td } from '@pancakeswap/uikit'
import CompactRow from './CompactRow'

const RowStyle = styled.tr`
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.backgroundDisabled};
        </RowStyle>
      ))}
    </tbody>
  </Table>
)

export default memo(CompactLimitOrderTable)
