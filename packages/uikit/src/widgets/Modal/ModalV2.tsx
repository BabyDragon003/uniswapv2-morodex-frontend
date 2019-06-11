import { AnimatePresence, domMax, LazyMotion } from "framer-motion";
import React, { useRef } from "react";
import { createPortal } from "react-dom";
import { BoxProps } from "../../components/Box";
import { Overlay } from "../../components/Overlay";
  onDismiss?: () => void;
  closeOnOverlayClick?: boolean;
  children?: React.ReactNode;
}

export function ModalV2({ isOpen, onDismiss, closeOnOverlayClick, children, ...props }: ModalV2Props & BoxProps) {
  const animationRef = useRef<HTMLDivElement>(null);

  const handleOverlayDismiss = () => {
    if (closeOnOverlayClick) {
      onDismiss?.();
    }
  };
  const portal = getPortalRoot();

  if (portal) {
    return createPortal(
      <LazyMotion features={domMax}>
        <AnimatePresence>
          {isOpen && (
            <StyledModalWrapper
              ref={animationRef}
              // @ts-ignore
              onAnimationStart={() => animationHandler(animationRef.current)}
              {...animationMap}
              variants={animationVariants}
              transition={{ duration: 0.3 }}
              {...props}
            >
              <Overlay onClick={handleOverlayDismiss}  style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}/>
              {children}
            </StyledModalWrapper>
          )}
        </AnimatePresence>
      </LazyMotion>,
      portal
    );
  }

  return null;
}
