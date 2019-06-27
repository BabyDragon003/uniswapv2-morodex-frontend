import styled from "styled-components";
import { useTranslation } from "@pancakeswap/localization";
import { ChevronDownIcon } from "../../../../components/Svg";
import { useMatchBreakpoints } from "../../../../contexts";

interface DetailsProps {
  actionPanelToggled: boolean;
}

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding-right: 8px;
  color: ${({ theme }) => theme.colors.primary};
    <Container>
      {!isDesktop && t("Details")}
      <ArrowIcon color="primary" toggled={actionPanelToggled} />
    </Container>
  );
};

export default Details;
