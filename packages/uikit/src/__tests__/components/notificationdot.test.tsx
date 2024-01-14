import React from "react";
import { renderWithProvider } from "../../testHelpers";
import NotificationDot from "../../components/NotificationDot/NotificationDot";

it("renders correctly", () => {
  const { asFragment } = renderWithProvider(
    <NotificationDot>
      <div />
    </NotificationDot>
  );
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c0 {
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      position: relative;
    }

    .c1 {
      display: none;
      position: absolute;
      top: 0;
      right: 0;
