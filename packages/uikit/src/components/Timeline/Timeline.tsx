import { Colors, lightColors } from "../../theme";
import { Flex } from "../Box";
import { CircleOutlineIcon, LogoIcon, CheckmarkCircleFillIcon } from "../Svg";
import { Text } from "../Text";
import InfoTooltip from "./InfoTooltip";
import { TimelineContainer, TimelineEvent } from "./styles";
import { TimelineProps, EventStatus } from "./types";

type getTextColorProps = {
  eventStatus: EventStatus;
    <TimelineContainer>
      {events.map(({ text, status, altText, infoText }) => {
        const isUpcoming = status === "upcoming";
        const isLive = status === "live";
        const isPast = status === "past";
        return (
          <TimelineEvent key={text} $useDark={useDark}>
            <Flex mr="10px" alignItems="center">
              {isUpcoming && <CircleOutlineIcon color={useDark ? "textDisabled" : lightColors.textDisabled} />}
              {isLive && <LogoIcon />}
              {isPast && <CheckmarkCircleFillIcon color={useDark ? "textSubtle" : lightColors.textSubtle} />}
            </Flex>
            <Text color={getTextColor({ eventStatus: status, useDark })} bold>
              {text}
            </Text>
            {altText && (
              <Text color="warning" ml="2px" bold>
                {altText}
              </Text>
            )}
            {infoText && (
              <InfoTooltip text={infoText} ml="10px" iconColor={useDark ? "textSubtle" : lightColors.textSubtle} />
            )}
          </TimelineEvent>
        );
      })}
    </TimelineContainer>
  );
};

export default Timeline;
