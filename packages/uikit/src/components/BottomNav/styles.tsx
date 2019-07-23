import styled from "styled-components";
import { Flex } from "../Box";

const StyledBottomNav = styled(Flex)`
  position: fixed;
  html[data-useragent*="TokenPocket_iOS"] & {
    padding-bottom: 45px;
  }
  z-index: 20;
`;

export default StyledBottomNav;
