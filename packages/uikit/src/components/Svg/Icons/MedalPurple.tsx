import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 25 25" {...props}>
      <path
        d="M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z"
        fill="#9A6AFF"
        fill="#A880FD"
      />
      <ellipse cx="12.5259" cy="14.0971" rx="8.89606" ry="8.22211" fill="#7645D9" />
      <ellipse
        rx="8.69974"
        ry="8.36325"
        transform="matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)"
        fill="#9A6AFF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z"
        fill="#CAB3F8"
      />
      <ellipse
        rx="6.64749"
        ry="6.39038"
        transform="matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)"
        fill="#8F5BFD"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z"
        fill="#7645D9"
      />
      <path
        d="M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z"
        fill="#452A7A"
      />
      <path
        d="M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z"
        fill="#452A7A"
      />
    </Svg>
  );
};

export default Icon;
