import React from "react";
import { SequencePlayer } from "./SequencePlayer";
import { bnb2CakeImages, cake2BnbImages } from "./constant";

export default {
  return (
    <div>
      <SequencePlayer images={bnb2CakeImages()} />
    </div>
  );
};

export const Cake2Bnb: React.FC<React.PropsWithChildren> = () => {
  return (
    <div>
      <SequencePlayer images={cake2BnbImages()} />
    </div>
  );
};
