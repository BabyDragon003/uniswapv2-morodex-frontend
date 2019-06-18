import styled from "styled-components";

export const Dots = styled.span`
  &::after {
    display: inline-block;
    0% {
      content: ".";
    }
    33% {
      content: "..";
    }
    66% {
      content: "...";
    }
  }
`;
