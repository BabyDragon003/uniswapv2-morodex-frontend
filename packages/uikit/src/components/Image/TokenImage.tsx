import styled from "styled-components";
import Image from "./Image";

const TokenImage = styled(Image)`
  &:before {
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.25);
    content: "";
    height: 100%;
    left: 0;
