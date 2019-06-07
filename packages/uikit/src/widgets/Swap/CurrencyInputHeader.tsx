import { AtomBox } from "@pancakeswap/ui";
import { ReactNode } from "react";
import { Heading } from "../../components/Heading";
import { Text } from "../../components/Text";

interface Props {
  title: ReactNode;
  subtitle: ReactNode;
}

export const CurrencyInputHeader = ({ title, subtitle }: Props) => {
  return (
    <AtomBox width="full" alignItems="center" flexDirection="column" padding="24px" borderBottom="1">
      <AtomBox display="flex" width="full" alignItems="center" justifyContent="space-between">
        {title}
      </AtomBox>
      {subtitle}
    </AtomBox>
  );
};
