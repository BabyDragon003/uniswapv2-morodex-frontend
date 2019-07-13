import { useEffect } from "react";

const useKonamiCheatCode = (matchedCodeHandler: () => void): void => {
  useEffect(() => {
    const pattern = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
    ];

    let currentIndex = 0;

    const onKeyUpHandler = (event: KeyboardEvent) => {
      const { key } = event;
      // is key in correct order otherwise reset
      if (key !== pattern[currentIndex]) {
        currentIndex = 0;
        return;
      }
      currentIndex += 1;
