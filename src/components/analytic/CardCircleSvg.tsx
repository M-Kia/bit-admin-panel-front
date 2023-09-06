import { JSX } from "react";

import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export default function CardCircleSvg(props: SvgIconProps): JSX.Element {
  return (
    <SvgIcon
      width="128"
      height="168"
      viewBox="0 0 128 168"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle opacity="0.3" cx="117" cy="84" r="95" fill="#D0E4FF" />
      <circle opacity="0.3" cx="117" cy="84" r="62" fill="#CEE3FF" />
    </SvgIcon>
  );
}