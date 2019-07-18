import { Variants } from "framer-motion";
import { keyframes } from "styled-components";

export const appearAnimation = keyframes`
  from { opacity:0 }
  to { opacity:1 }
`;

export const disappearAnimation = keyframes`
  from { opacity:1 }
  to { opacity:0 }
`;

export const animationHandler = (element: HTMLElement | null) => {
  if (!element) return;
  initial: "initial",
  animate: "animate",
  exit: "exit",
};

export const promotedGradient = keyframes`
  0% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 100%;
  }
  100% {
    background-position: 50% 0%;
  }
`;
