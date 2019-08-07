import { ChevronLeftIcon, Flex, Text } from '@pancakeswap/uikit'
import Page from 'components/Layout/Page'
import { useTranslation } from '@pancakeswap/localization'
import { useRouter } from 'next/router'
import Link from 'next/link'
import TeamCard from './components/TeamCard'
import TeamHeader from './components/TeamHeader'

const Team = () => {
  const { t } = useTranslation()
          </Flex>
        </Link>
      </Flex>
      <TeamCard id={idStr} />
    </Page>
  )
}

export default Team
