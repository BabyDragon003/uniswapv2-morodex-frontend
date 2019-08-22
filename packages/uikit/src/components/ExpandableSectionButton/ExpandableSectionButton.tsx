import styled from "styled-components";
import { useTranslation } from "@pancakeswap/localization";
import { useCallback } from "react";
import { Text } from "../Text";
import { ChevronDownIcon, ChevronUpIcon } from "../Svg";

export interface ExpandableSectionButtonProps {
  onClick?: () => void;
  expanded?: boolean;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
      <Text color="primary" bold>
        {expanded ? t("Hide") : t("Details")}
      </Text>
      {expanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
    </Wrapper>
  );
};

export default ExpandableSectionButton;
