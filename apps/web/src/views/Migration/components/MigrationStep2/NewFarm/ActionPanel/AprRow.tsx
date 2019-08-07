import React from 'react'
import styled from 'styled-components'
import { Flex, Text } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import Apr, { AprProps } from 'views/Farms/components/FarmTable/Apr'

const Containter = styled(Flex)`
  margin-top: 12px;
  padding: 0;
  width: 100%;
    <Containter justifyContent="space-between">
      <Text>{t('APR')}</Text>
      <Apr {...apr} />
    </Containter>
  )
}

export default AprRow
