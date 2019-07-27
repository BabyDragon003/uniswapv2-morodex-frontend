import noop from "lodash/noop";
import { vi } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { renderWithProvider } from "../../testHelpers";
import { Menu, menuConfig, Language } from "../../widgets/Menu";
import { footerLinks } from "../../components/Footer/config";
import { SubMenuItemsType } from "../../components/SubMenuItems/types";

/**
 * @see https://jestjs.io/docs/en/manual-mocks
 */
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

    </BrowserRouter>
  );

  expect(asFragment()).toMatchSnapshot();
});
