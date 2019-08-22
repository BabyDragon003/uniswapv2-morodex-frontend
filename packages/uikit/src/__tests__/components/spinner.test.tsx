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
      width: 100%;
    }

    <div
        class="c0"
        height="153.216"
        width="128"
      >
        <div
          class="c1"
        >
          <div
            class="c2"
          />
        </div>
      </div>
    </DocumentFragment>
  `);
});
