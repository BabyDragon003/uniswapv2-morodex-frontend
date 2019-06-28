import { TextProps, Skeleton } from "@pancakeswap/uikit";
import { useMemo } from "react";
import isUndefinedOrNull from "@pancakeswap/utils/isUndefinedOrNull";
import _toNumber from "lodash/toNumber";
import _isNaN from "lodash/isNaN";
import _replace from "lodash/replace";
import _toString from "lodash/toString";
import Balance from "./Balance";

interface BalanceProps extends TextProps {
  value: number;
  decimals?: number;
  unit?: string;
  isDisabled?: boolean;
  prefix?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const BalanceWithLoading: React.FC<
  React.PropsWithChildren<Omit<BalanceProps, "value"> & { value: string | number }>
