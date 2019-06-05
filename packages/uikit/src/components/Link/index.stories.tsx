import React from "react";
import { PancakeRoundIcon } from "../Svg";
import { Link, LinkExternal } from "./index";

export default {
  title: "Components/Link",
  component: Link,
  argTypes: {
    fontSize: {
      name: "fontSize",
export const Default: React.FC<React.PropsWithChildren> = () => {
  return (
    <div>
      <div>
        <Link href="/">Default</Link>
      </div>
      <div>
        <Link href="/" color="text">
          Custom color
        </Link>
      </div>
      <div>
        <Link external href="/">
          External
        </Link>
      </div>
      <div>
        <Link href="/">
          With icon
          <PancakeRoundIcon />
        </Link>
      </div>
      <div>
        <LinkExternal href="/">LinkExternal</LinkExternal>
      </div>
    </div>
  );
};
