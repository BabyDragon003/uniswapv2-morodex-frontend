import React, { useState } from "react";
import PancakeToggle from "./PancakeToggle";

export default {
  title: "Components/PancakeToggle",
  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <PancakeToggle checked={isChecked} onChange={toggle} />
      </div>
      <div style={{ marginBottom: "32px" }}>
        <PancakeToggle checked={isChecked} onChange={toggle} scale="md" />
      </div>
      <div>
        <PancakeToggle checked={isChecked} onChange={toggle} scale="sm" />
      </div>
    </>
  );
};
