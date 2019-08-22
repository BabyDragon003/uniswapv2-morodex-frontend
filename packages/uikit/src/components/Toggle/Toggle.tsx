import React from "react";
import { Flex } from "../Box";
import StyledToggle, { Input, Handle } from "./StyledToggle";
import { ToggleProps, scales } from "./types";

const Toggle: React.FC<React.PropsWithChildren<ToggleProps>> = ({
  checked,
  defaultColor = "input",
  checkedColor = "success",
  scale = scales.LG,
  startIcon,
  endIcon,
  ...props
}) => {
  const isChecked = !!checked;
      ) : (
        <Handle scale={scale} />
      )}
    </StyledToggle>
  );
};

export default Toggle;
