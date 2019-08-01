import styled from "styled-components";
import { Flex } from "../../../../components/Box";
import { CalculateIcon } from "../../../../components/Svg";
import { IconButton } from "../../../../components/Button";

const ApyLabelContainer = styled(Flex)`
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

interface FarmApyButtonProps {
  hideButton?: boolean;
  strikethrough?: boolean;
  return (
    <Flex flexDirection="column" alignItems="flex-start">
      <ApyLabelContainer
        alignItems="center"
        style={{ textDecoration: strikethrough ? "line-through" : "initial" }}
        onClick={handleClick}
      >
        {children}
        {variant === "text-and-button" && (
          <IconButton variant="text" scale="sm" ml="4px">
            <CalculateIcon width="18px" />
          </IconButton>
        )}
      </ApyLabelContainer>
    </Flex>
  );
};
