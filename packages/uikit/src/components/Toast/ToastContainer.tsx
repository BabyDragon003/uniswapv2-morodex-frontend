import { TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import { Toast } from "./Toast";
import { ToastContainerProps } from "./types";

const ZINDEX = 1000;
const TOP_POSITION = 80; // Initial position from the top

const StyledToastContainer = styled.div`
  .enter,
  .appear {
    opacity: 0.01;
  }

  .enter.enter-active,
  .appear.appear-active {
    opacity: 1;
    transition: opacity 250ms ease-in;
  }

          const top = TOP_POSITION + index * stackSpacing;

          return (
            <Toast key={toast.id} toast={toast} onRemove={onRemove} ttl={ttl} style={{ top: `${top}px`, zIndex }} />
          );
        })}
      </TransitionGroup>
    </StyledToastContainer>
  );
};
