import { ThemeProvider, DefaultTheme } from "styled-components";
import { MatchBreakpointsProvider } from "./contexts/MatchBreakpoints/Provider";
import { ToastsProvider } from "./contexts/ToastsContext/Provider";

export const UIKitProvider: React.FC<React.PropsWithChildren<{ theme: DefaultTheme; children: React.ReactNode }>> = ({
        <ToastsProvider>{children}</ToastsProvider>
      </MatchBreakpointsProvider>
    </ThemeProvider>
  );
};
