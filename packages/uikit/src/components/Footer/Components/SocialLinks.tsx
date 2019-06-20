import React from "react";
import { FlexProps } from "../../Box";
import Flex from "../../Box/Flex";
import Dropdown from "../../Dropdown/Dropdown";
import Link from "../../Link/Link";
import { socials } from "../config";

const SocialLinks: React.FC<React.PropsWithChildren<FlexProps>> = ({ ...props }) => (
  <Flex {...props} data-theme="dark">
    {socials.map((social, index) => {
      const iconProps = {
        width: "20px",
        color: "textSubtle",
        style: { cursor: "pointer" },
      };
        </Link>
      );
    })}
  </Flex>
);

export default React.memo(SocialLinks, () => true);
