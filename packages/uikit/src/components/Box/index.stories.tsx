import React from "react";
import BoxComponent from "./Box";
import FlexComponent from "./Flex";
import GridComponent from "./Grid";
import Text from "../Text/Text";
import { Link } from "../Link";

export default {
  title: "Components/Primitives",
  component: BoxComponent,
      </BoxComponent>
    </div>
  );
};

export const Flex: React.FC<React.PropsWithChildren> = () => {
  return (
    <div>
      <Text>Based on the Box component. You can apply any flexbox properties on the Flex component.</Text>
      <Link href="https://styled-system.com/api#flexbox" target="_blank">
        List of applicable props
      </Link>
      <FlexComponent justifyContent="space-between" mt="40px">
        <span>Left</span>
        <span>right</span>
      </FlexComponent>
      <FlexComponent justifyContent="center" mt="8px">
        <span>center</span>
      </FlexComponent>
    </div>
  );
};

export const Grid: React.FC<React.PropsWithChildren> = () => {
  return (
    <GridComponent
      justifyItems="center"
      alignContent="center"
      gridTemplateColumns="1fr 1fr"
      gridColumnGap="16px"
      style={{ backgroundColor: "#7645D9" }}
    >
      <BoxComponent style={{ backgroundColor: "#1fc7d4", width: "300px", height: "300px" }} />
      <BoxComponent style={{ backgroundColor: "#1fc7d4", width: "300px", height: "300px" }} />
    </GridComponent>
  );
};
