import styled from "styled-components";
import { useTranslation } from "@pancakeswap/localization";
import { Text } from "../../../../components/Text";
import { HelpIcon } from "../../../../components/Svg";
import { Skeleton } from "../../../../components/Skeleton";
import { useTooltip } from "../../../../hooks/useTooltip";
import { FarmTableLiquidityProps } from "../../types";

const ReferenceElement = styled.div`
  display: inline-block;
`;

const LiquidityWrapper = styled.div`
  min-width: 110px;
  font-weight: 600;
    liquidity && liquidity.gt(0) ? (
      `$${Number(liquidity).toLocaleString(undefined, { maximumFractionDigits: 0 })}`
    ) : (
      <Skeleton width={60} />
    );
  const { t } = useTranslation();
  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    t("Total value of the funds in this farm’s liquidity pair"),
    { placement: "top-end", tooltipOffset: [20, 10] }
  );

  return (
    <Container>
      <LiquidityWrapper>
        <Text>{displayLiquidity}</Text>
      </LiquidityWrapper>
      <ReferenceElement ref={targetRef}>
        <HelpIcon color="textSubtle" />
      </ReferenceElement>
      {tooltipVisible && tooltip}
    </Container>
  );
};

export default Liquidity;
