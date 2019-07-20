import React from "react";
import BoxComponent from "./Box";
import FlexComponent from "./Flex";
import GridComponent from "./Grid";
import Text from "../Text/Text";
import { Link } from "../Link";

export default {
  title: "Components/Primitives",
  component: BoxComponent,
  argTypes: {},
};

export const Box: React.FC<React.PropsWithChildren> = () => {
  return (
    <div>
      <BoxComponent as="p">
        Contains background, border, layout, position, and space from{" "}
        <Link href="https://styled-system.com/api" target="_blank">
          Styled System&lsquo;s API
        </Link>
      </BoxComponent>
    </div>
  );
};
      style={{ backgroundColor: "#7645D9" }}
    >
      <BoxComponent style={{ backgroundColor: "#1fc7d4", width: "300px", height: "300px" }} />
      <BoxComponent style={{ backgroundColor: "#1fc7d4", width: "300px", height: "300px" }} />
    </GridComponent>
  );
};
