import React, { useState } from "react";
import Box from "../Box/Box";
import Button from "../Button/Button";
import Text from "../Text/Text";
import BottomDrawer from "./BottomDrawer";

export default {
  title: "Components/BottomDrawer",
  component: BottomDrawer,
  argTypes: {},
};

export const Default: React.FC<React.PropsWithChildren> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const content = (
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
