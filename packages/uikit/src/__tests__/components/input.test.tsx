import { vi } from "vitest";
import { renderWithProvider } from "../../testHelpers";
import Input from "../../components/Input/Input";

const handleChange = vi.fn();

it("renders correctly", () => {
  const { asFragment } = renderWithProvider(<Input type="text" value="input" onChange={handleChange} />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      border: 1px solid var(--colors-inputSecondary);
    }

    .c0::-webkit-input-placeholder {
      color: var(--colors-textSubtle);
    }

    .c0::-moz-placeholder {
      color: var(--colors-textSubtle);
    }

    .c0:-ms-input-placeholder {
      color: var(--colors-textSubtle);
    }

    .c0::placeholder {
      color: var(--colors-textSubtle);
    }

    .c0:disabled {
      background-color: var(--colors-backgroundDisabled);
      box-shadow: none;
      color: var(--colors-textDisabled);
      cursor: not-allowed;
    }

    .c0:focus:not(:disabled) {
      box-shadow: var(--shadows-focus);
    }

    <input
        class="c0"
        scale="md"
        type="text"
        value="input"
      />
    </DocumentFragment>
  `);
});
