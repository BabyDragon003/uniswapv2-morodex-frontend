import capitalize from "lodash/capitalize";
import Box from "../Box/Box";
import Flex from "../Box/Flex";
import { CommunityIcon, RemoveIcon } from "../Svg";
import Tag from "./Tag";
import { scales, variants } from "./types";

export default {
  title: "Components/Tag",
  argTypes: {},
};

export const Default: React.FC<React.PropsWithChildren> = () => {
  return (
    <Box>
      {Object.values(variants).map((variant) => {
        return (
          <Box key={variant} mb="32px ">
            <Flex alignItems="center">
              {Object.values(scales).map((scale) => {
                return (
                  <Tag scale={scale} variant={variant} mr="8px">
                    {`${capitalize(variant)}: ${scale.toUpperCase()}`}
                  </Tag>
                );
      </Tag>
      <Tag fontWeight="bold" mr="16px">
        Bold
      </Tag>
    </div>
  );
};
