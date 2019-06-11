import useTooltip from "../../hooks/useTooltip/useTooltip";
import { BoxProps, Flex } from "../Box";
import { InfoIcon } from "../Svg";

type InfoTooltip = {
  return (
    <Flex {...props} alignItems="center">
      {tooltipVisible && tooltip}
      <Flex ref={targetRef} alignItems="center">
        <InfoIcon color={iconColor} />
      </Flex>
    </Flex>
  );
};

export default InfoTooltip;
