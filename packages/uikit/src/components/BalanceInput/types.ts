import { InputHTMLAttributes, ReactNode } from "react";
import { BoxProps } from "../Box";
import { InputProps } from "../Input";

export interface BalanceInputProps extends BoxProps {
  value: string | number;
  onUserInput: (input: string) => void;
  innerRef?: React.RefObject<HTMLInputElement>;
  currencyValue?: ReactNode;
  placeholder?: string;
  onUserInput: (input: string) => void;
  inputProps?: Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "placeholder" | "onChange">;
  isWarning?: boolean;
}
