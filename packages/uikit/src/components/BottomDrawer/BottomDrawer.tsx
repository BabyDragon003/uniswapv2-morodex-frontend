import { useDelayedUnmount } from "@pancakeswap/hooks";
import React, { useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { useMatchBreakpoints } from "../../contexts";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import getPortalRoot from "../../util/getPortalRoot";
import { Box } from "../Box";
import { IconButton } from "../Button";
import { Overlay } from "../Overlay";
import { CloseIcon } from "../Svg";
import { DrawerContainer } from "./styles";

interface BottomDrawerProps {
  content: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BottomDrawer: React.FC<React.PropsWithChildren<BottomDrawerProps>> = ({ content, isOpen, setIsOpen }) => {
  const ref = useRef<HTMLDivElement>(null);
              <CloseIcon />
            </IconButton>
          </Box>
          {content}
        </DrawerContainer>
      </>,
      portal
    );
  return null;
};

export default BottomDrawer;
