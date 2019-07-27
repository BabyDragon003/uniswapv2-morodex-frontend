import { renderWithProvider } from "../../testHelpers";
import { Spinner } from "../../components/Spinner";

it("renders correctly", () => {
  const { asFragment } = renderWithProvider(<Spinner />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c0 {
      width: 128px;
      height: 153.216px;
      position: relative;
    }

    .c1 {
      max-height: 153.216px;
      max-width: 128px;
      position: relative;
      width: 100%;
    }

    .c1:after {
      content: "";
      display: block;
      padding-top: 119.7%;
    }
