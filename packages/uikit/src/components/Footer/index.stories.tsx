import noop from "lodash/noop";
import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter } from "react-router-dom";
import { langs, footerLinks } from "./config";
};

const Template: React.FC<React.PropsWithChildren<FooterProps>> = ({ ...args }) => {
  return (
    <BrowserRouter>
      <Footer {...args} />
    </BrowserRouter>
  );
};

export const Default = Template.bind({});
Default.args = {
  items: footerLinks,
  isDark: true,
  toggleTheme: noop,
  langs,
  setLang: noop,
  currentLang: "EN",
  cakePriceUsd: 0.023158668932877668,
  buyCakeLabel: "Buy CAKE",
};
