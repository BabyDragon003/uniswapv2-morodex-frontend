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
              </Tag>
              <Tag variant={variant} outline endIcon={<RemoveIcon />} mr="8px">
                {`${capitalize(variant)} Icon Right`}
              </Tag>
              <Tag variant={variant} outline startIcon={<CommunityIcon />} endIcon={<RemoveIcon />}>
                {`${capitalize(variant)} Both`}
              </Tag>
            </Flex>
          </Box>
        );
      })}
    </Box>
  );
};

export const TextVariations: React.FC<React.PropsWithChildren> = () => {
  return (
    <div>
      <Tag textTransform="uppercase" mr="16px">
        uppercase
      </Tag>
      <Tag fontWeight="bold" mr="16px">
        Bold
      </Tag>
    </div>
  );
};
