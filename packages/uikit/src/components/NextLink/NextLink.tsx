import { forwardRef } from "react";
import styled from "styled-components";
import NextLink from "next/link";

// react-router-dom LinkProps types
interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: any;
  replace?: boolean;
  innerRef?: React.Ref<HTMLAnchorElement>;
  // next
  prefetch?: boolean;
}

const A = styled.a``;

