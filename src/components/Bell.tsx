import * as React from "react";

export const Bell: React.FunctionComponent<{ size?: number }> = ({ size }) => (
  <svg viewBox="0 0 200 200" width={size ?? "200"} height={size ?? "200"}>
    <g transform="matrix(8.3333333,0,0,8.3333333,0,0)">
      <path
        d="M10,21.75a2.087,2.087,0,0,0,4.005,0"
        fill="none"
        stroke="#333"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      ></path>
      <path
        d="M12 3L12 0.75"
        fill="none"
        stroke="#333"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      ></path>
      <path
        d="M12,3a7.5,7.5,0,0,1,7.5,7.5c0,7.046,1.5,8.25,1.5,8.25H3s1.5-1.916,1.5-8.25A7.5,7.5,0,0,1,12,3Z"
        fill="none"
        stroke="#333"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      ></path>
    </g>
  </svg>
);
