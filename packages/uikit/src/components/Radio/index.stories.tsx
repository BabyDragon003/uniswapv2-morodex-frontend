import React, { useState } from "react";
import Radio from "./Radio";

export default {
  title: "Components/Radio",
  component: Radio,
  argTypes: {},
};

export const Default: React.FC<React.PropsWithChildren> = () => {
  const [radio, setRadio] = useState("one");
  const [radioSm, setRadioSm] = useState("one");

  const handleChange = (evt) => {
    // eslint-disable-next-line
    console.info("fired");
    const { value } = evt.target;
    setRadio(value);
  };

  const handleChangeSm = (evt) => {
    const { value } = evt.target;
    setRadioSm(value);
  };

