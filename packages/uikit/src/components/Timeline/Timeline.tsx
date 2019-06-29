import { Colors, lightColors } from "../../theme";
import { Flex } from "../Box";
import { CircleOutlineIcon, LogoIcon, CheckmarkCircleFillIcon } from "../Svg";
import { Text } from "../Text";
import InfoTooltip from "./InfoTooltip";
import { TimelineContainer, TimelineEvent } from "./styles";
import { TimelineProps, EventStatus } from "./types";

type getTextColorProps = {
  eventStatus: EventStatus;
  useDark: boolean;
};

const getTextColor = ({ eventStatus, useDark }: getTextColorProps): keyof Colors => {
  if (eventStatus === "upcoming") return useDark ? "textDisabled" : (lightColors.textDisabled as keyof Colors);
  if (eventStatus === "live") return "success";
  return useDark ? "textSubtle" : (lightColors.textSubtle as keyof Colors);
};

const Timeline: React.FC<React.PropsWithChildren<TimelineProps>> = ({ events, useDark = true }) => {
  return (
    <TimelineContainer>
      {events.map(({ text, status, altText, infoText }) => {
        const isUpcoming = status === "upcoming";
        const isLive = status === "live";
export default Timeline;
