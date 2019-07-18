import noop from "lodash/noop";
import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter } from "react-router-dom";
import { langs, footerLinks } from "./config";
import Footer from "./Footer";
import { FooterProps } from "./types";

export default {
  title: "Components/Menu/Footer",
  component: Footer,
};

const Template: React.FC<React.PropsWithChildren<FooterProps>> = ({ ...args }) => {
  return (
};
