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

    document.addEventListener("keyup", onKeyUpHandler);
    return () => document.removeEventListener("keyup", onKeyUpHandler);
  }, [matchedCodeHandler]);
};

export default useKonamiCheatCode;
