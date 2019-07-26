import Link from 'next/link'
import { Box, Button, Card, CardBody, Flex, Step, Stepper, Text } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { StyledWaveContainer, LandingBodyWrapper } from 'views/PancakeSquad/styles'
import useTheme from 'hooks/useTheme'
import { useGetCakeBalance } from 'hooks/useTokenBalance'
import EventStepsBottomWave from '../../assets/EventStepsBottomWave'
import EventStepsTopWave from '../../assets/EventStepsTopWave'
import stepsConfigBuilder from './config'
import { StyledBunniesSquadImg, StyledEventStepsSectionContainer } from './styles'
import { EventStepsProps } from './types'

const EventStepsSection: React.FC<React.PropsWithChildren<EventStepsProps>> = ({
  eventInfos,
  userInfos,
  isLoading,
  userStatus,
  account,
}) => {
  const { t } = useTranslation()
              </Text>
              <Box>
                <Link href="/nfts" passHref>
                  <Button as="a">{t('View market')}</Button>
                </Link>
              </Box>
            </Flex>
          ) : (
            <Stepper>
              {stepsConfig.map((step, index) => (
                <Step
                  key={step.id}
                  index={index}
                  statusFirstPart={step.status}
                  statusSecondPart={stepsConfig[index + 1]?.status}
                >
                  <Card>
                    <CardBody>
                      <Box maxWidth="388px">
                        <Text color="secondary" fontSize="20px" mb="16px" bold>
                          {step.title}
                        </Text>
                        {step.bodyText.map((text) => (
                          <Text key={text} color="textSubtle" mb="16px">
                            {text}
                          </Text>
                        ))}
                        {isLoading ? null : step.buttons}
                      </Box>
                    </CardBody>
                  </Card>
                </Step>
              ))}
            </Stepper>
          )}
        </Box>
      </LandingBodyWrapper>
      <StyledWaveContainer bottom="-3px">
        <Flex justifyContent="center">
          <StyledBunniesSquadImg src="/images/pancakeSquad/squadRow.png" alt="pancake bunnies squad" />
        </Flex>
        <EventStepsBottomWave isDark={isDark} />
      </StyledWaveContainer>
    </StyledEventStepsSectionContainer>
  )
}

export default EventStepsSection
