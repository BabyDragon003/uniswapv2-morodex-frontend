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
              <Td>Cell 2-2</Td>
              <Td>Cell 2-3</Td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </div>
  );
};
