import { useContext } from 'react'
import styled from 'styled-components'
import { Breadcrumbs, Heading, Text, Link, Button } from '@pancakeswap/uikit'
import { useTranslation, TranslateFunction } from '@pancakeswap/localization'
import { ProfileCreationContext } from './contexts/ProfileCreationProvider'

const Wrapper = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.colors.textSubtle};
  margin-top: 32px;
  margin-bottom: 24px;
  padding-bottom: 24px;
`

const steps = (t: TranslateFunction) => [
  t('Get Starter Collectible'),
      </Heading>
      <Text color="textSubtle" mb="8px">
        {t('Total cost: 1.5 CAKE')}
      </Text>
      <Link href="/profile">
        <Button mb="24px" scale="sm" variant="secondary">
          {t('Back to profile')}
        </Button>
      </Link>
      <Breadcrumbs>
        {steps(t).map((translationKey, index) => {
          return (
            <Text key={t(translationKey)} color={index <= currentStep ? 'text' : 'textDisabled'}>
              {translationKey}
            </Text>
          )
        })}
      </Breadcrumbs>
    </Wrapper>
  )
}

export default Header
