// icon:movie | Tabler Icons https://tablericons.com/ | Csaba Kissi
import * as React from "react";

function IconMovie(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M6 4 H18 A2 2 0 0 1 20 6 V18 A2 2 0 0 1 18 20 H6 A2 2 0 0 1 4 18 V6 A2 2 0 0 1 6 4 z" />
      <path d="M8 4v16M16 4v16M4 8h4M4 16h4M4 12h16M16 8h4M16 16h4" />
    </svg>
  );
}

export default IconMovie;
