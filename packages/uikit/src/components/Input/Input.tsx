import styled, { DefaultTheme } from "styled-components";
import { InputProps, scales } from "./types";

interface StyledInputProps extends InputProps {
  theme: DefaultTheme;
}

/**
 * Priority: Warning --> Success
 */
const getBoxShadow = ({ isSuccess = false, isWarning = false, theme }: StyledInputProps) => {
  if (isWarning) {
    return theme.shadows.warning;
  }

  }
};

const Input = styled.input<InputProps>`
  // background-color: ${({ theme }) => theme.colors.input};
  background: transparent;
  border-radius: 6px;
  box-shadow: ${getBoxShadow};
  // color: ${({ theme }) => theme.colors.text};
  color: rgba(255, 255, 255, 1);
  display: block;
  font-size: 16px;
  height: ${getHeight};
  outline: 0;
  padding: 0 16px;
  width: 100%;
  // border: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  border: 1px solid rgba(255, 255, 255, 0.25);

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSubtle};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.backgroundDisabled};
    box-shadow: none;
    color: ${({ theme }) => theme.colors.textDisabled};
    cursor: not-allowed;
  }

  &:focus:not(:disabled) {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

Input.defaultProps = {
  scale: scales.MD,
  isSuccess: false,
  isWarning: false,
};

export default Input;
