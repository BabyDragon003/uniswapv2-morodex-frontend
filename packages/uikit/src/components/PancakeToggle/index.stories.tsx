import React, { useState } from "react";
import PancakeToggle from "./PancakeToggle";

export default {
  title: "Components/PancakeToggle",
  component: PancakeToggle,
};

export const Default: React.FC<React.PropsWithChildren> = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
