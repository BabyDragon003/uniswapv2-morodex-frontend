import { useEffect } from "react";

const useKonamiCheatCode = (matchedCodeHandler: () => void): void => {
  useEffect(() => {
    const pattern = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
        currentIndex = 0;
        return;
      }
      currentIndex += 1;
      if (pattern.length === currentIndex) {
        currentIndex = 0;
        matchedCodeHandler();
      }
    };

    document.addEventListener("keyup", onKeyUpHandler);
    return () => document.removeEventListener("keyup", onKeyUpHandler);
  }, [matchedCodeHandler]);
};

export default useKonamiCheatCode;
