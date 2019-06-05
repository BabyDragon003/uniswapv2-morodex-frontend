import React, { useState } from "react";
import Box from "../Box/Box";
import Button from "../Button/Button";
import Text from "../Text/Text";
import BottomDrawer from "./BottomDrawer";

export default {
  title: "Components/BottomDrawer",
  component: BottomDrawer,
  argTypes: {},
        </Text>
      ))}
      <Text>The end</Text>
    </Box>
  );
  return (
    <Box p="24px">
      <Text mb="8px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni delectus dolorum porro facere cum ducimus, iste
        nobis voluptas dolorem quaerat perspiciatis voluptatum sed laborum reiciendis magnam illum necessitatibus. Ea,
        hic.
      </Text>
      <Button onClick={() => setIsOpen(true)}>Show bottom drawer</Button>
      {[...Array(10).keys()].map(() => (
        <Text mb="16px">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa optio et laudantium ipsum ipsam nesciunt, odio
          hic quibusdam molestias magnam. Tempora saepe ea quidem quo, commodi sint tempore iste explicabo!
        </Text>
      ))}
      <BottomDrawer content={content} isOpen={isOpen} setIsOpen={setIsOpen} />
    </Box>
  );
};
