import React from "react";
import Heading from "./Heading";

export default {
  title: "Components/Heading",
  component: Heading,
  argTypes: {},
};

export const Sizes: React.FC<React.PropsWithChildren> = () => {
  return (
    <div>
      <Heading>Default</Heading>
      <Heading scale="md">Size md</Heading>
      <Heading scale="lg">Size lg</Heading>
      <Heading scale="xl">Size xl</Heading>
      <Heading scale="xxl">Size xxl</Heading>
    </div>
  );
};
