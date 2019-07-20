import React from "react";
import Card from "../Card/Card";
import Table from "./Table";
import { Th, Td } from "./Cell";

export default {
  title: "Components/Table",
  component: Table,
  argTypes: {},
};

export const Default: React.FC<React.PropsWithChildren> = () => {
  return (
    <div style={{ width: "640px" }}>
      <Card>
        <Table>
          <thead>
            <tr>
              <Th textAlign="left">Column 1</Th>
              <Th>Column 2</Th>
              <Th>Column 3</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
