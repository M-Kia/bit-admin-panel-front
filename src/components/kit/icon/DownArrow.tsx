import { JSX, SVGProps } from "react";

import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export default function DownArrow(props: SvgIconProps): JSX.Element {
  return (
    <SvgIcon
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="#C7E0F4"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 12.9735L2.76381 8.1214C2.58568 7.95634 2.30079 7.96006 2.12747 8.1297C1.95416 8.29935 1.95806 8.57068 2.13619 8.73574L7.68619 13.8786C7.86088 14.0405 8.13912 14.0405 8.31381 13.8786L13.8638 8.73574C14.0419 8.57068 14.0458 8.29935 13.8725 8.1297C13.6992 7.96006 13.4143 7.95634 13.2362 8.1214L8 12.9735Z"
        fill="inherit"
      />
    </SvgIcon>
  );
}
