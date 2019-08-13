import React from "react";
import { CakePrice, CakePriceProps } from ".";
import { Flex } from "../Box";

export default {
    <Flex p="10px">
      <CakePrice {...args} />
    </Flex>
  );
};

export const Default = Template.bind({});
Default.args = {
  cakePriceUsd: 20.0,
};
