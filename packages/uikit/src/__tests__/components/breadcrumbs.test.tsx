import React from "react";
import { renderWithProvider } from "../../testHelpers";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

it("renders correctly", () => {
  const { asFragment } = renderWithProvider(<Breadcrumbs>Link</Breadcrumbs>);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c0 {
      -webkit-align-items: center;
    }

    .c0 a {
      color: var(--colors-primary);
    }

    .c0 a:hover {
      color: var(--colors-primaryBright);
    }

    <ul
        class="c0"
      />
    </DocumentFragment>
  `);
});
