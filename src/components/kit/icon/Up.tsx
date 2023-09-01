import { JSX } from "react";

import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export default function UpArrow(props: SvgIconProps): JSX.Element {
  return (
    <SvgIcon
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 3.02653L13.2362 7.8786C13.4143 8.04366 13.6992 8.03994 13.8725 7.8703C14.0458 7.70065 14.0419 7.42932 13.8638 7.26426L8.31381 2.1214C8.13912 1.95953 7.86088 1.95953 7.68619 2.1214L2.13619 7.26426C1.95806 7.42932 1.95416 7.70065 2.12747 7.8703C2.30079 8.03994 2.58568 8.04366 2.76381 7.8786L8 3.02653Z"
        fill="#C7E0F4"
      />
    </SvgIcon>
  );
}
