import { JSX } from "react";
import NextLink from "next/link";

import MuiLink, { LinkProps } from "@mui/material/Link";

export default function Link(props: LinkProps): JSX.Element {
  return (
    <MuiLink component={NextLink} underline="none" color="inherit" {...props} />
  );
}
