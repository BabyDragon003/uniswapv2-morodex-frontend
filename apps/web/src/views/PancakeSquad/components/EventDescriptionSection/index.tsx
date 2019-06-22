import { Box, Button, Flex, Link, Text } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { LandingBodyWrapper } from 'views/PancakeSquad/styles'
import eventDescriptionConfigBuilder from './config'
import {
  StyledBodyTextElement,
  StyledBodyTextList,
  StyledBunnyAccessoriesContainer,
  StyledBunnyAccessory,
  StyledEventDescriptionSectionContainer,
} from './styles'

const EventDescriptionSection = () => {
  const { t } = useTranslation()

  const { headingText, subHeadingText, bodyTextHeader, bodyText, primaryButton, image, accessoriesImages } =
    eventDescriptionConfigBuilder({ t })

  return (
    <StyledEventDescriptionSectionContainer justifyContent={['flex-start', null, null, 'center']}>
      <LandingBodyWrapper
        alignItems={['flex-end', null, 'center', null]}
        flexDirection={['column', null, null, 'row']}
        pt={['64px', null, '104px']}
        pb="60px"
                    {t(primaryButton.text)}
                  </Text>
                </Button>
              </Link>
            </Flex>
          )}
        </Flex>
        <Flex
          position="relative"
          order={[1, null, null, 2]}
          mb={['24px', null, '-3px']}
          width={['192px', null, '250px', '50%']}
        >
          <Box>
            <img src={image.src} alt={image.alt} />
          </Box>
          <StyledBunnyAccessoriesContainer>
            {accessoriesImages.map((accessory) => (
              <StyledBunnyAccessory key={accessory.alt} src={accessory.src} alt={accessory.alt} />
            ))}
          </StyledBunnyAccessoriesContainer>
        </Flex>
      </LandingBodyWrapper>
    </StyledEventDescriptionSectionContainer>
  )
}

export default EventDescriptionSection
