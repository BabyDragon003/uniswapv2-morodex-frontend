import React from "react";
import { renderWithProvider } from "../../testHelpers";
import NotificationDot from "../../components/NotificationDot/NotificationDot";

it("renders correctly", () => {
  const { asFragment } = renderWithProvider(
    <NotificationDot>
      <div />
    </NotificationDot>
  );
      display: none;
      position: absolute;
      top: 0;
      right: 0;
      width: 10px;
      height: 10px;
      pointer-events: none;
      border: 2px solid var(--colors-invertedContrast);
      border-radius: 50%;
      background-color: var(--colors-failure);
    }

    <span
        class="c0"
      >
        <div />
        <span
          class="c1"
          color="failure"
        />
      </span>
    </DocumentFragment>
  `);
});
