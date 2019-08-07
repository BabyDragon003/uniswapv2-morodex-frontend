import React from "react";
import { renderWithProvider } from "../../testHelpers";
import Progress from "../../components/Progress/Progress";

it("renders correctly", () => {
  const { asFragment } = renderWithProvider(<Progress primaryStep={50} />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c2 {
      position: absolute;
      box-shadow: var(--shadows-inset);
      overflow: hidden;
      border-radius: 32px;
      height: 16px;
    }

    .c0 .c1 {
      border-top-left-radius: 32px;
      border-bottom-left-radius: 32px;
    }

    <div
        class="c0"
        scale="md"
      >
        <div
          class="c1 c2"
          style="width: 50%;"
        />
      </div>
    </DocumentFragment>
  `);
});
