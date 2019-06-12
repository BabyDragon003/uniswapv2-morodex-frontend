import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { useTranslation } from "@pancakeswap/localization";
import throttle from "lodash/throttle";
import { Button } from "../Button";
import { ChevronUpIcon } from "../Svg";

const FixedContainer = styled.div`
  position: fixed;
  right: 5%;
    });
  }, []);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 700) {
        setVisible(true);
      } else if (scrolled <= 700) {
        setVisible(false);
      }
    };

    const throttledToggleVisible = throttle(toggleVisible, 200);

    window.addEventListener("scroll", throttledToggleVisible);

    return () => window.removeEventListener("scroll", throttledToggleVisible);
  }, []);

  return (
    <FixedContainer style={{ display: visible ? "inline" : "none" }}>
      <Button variant="subtle" endIcon={<ChevronUpIcon color="invertedContrast" />} onClick={scrollToTop}>
        {t("To Top")}
      </Button>
    </FixedContainer>
  );
};

export default ScrollToTopButton;
