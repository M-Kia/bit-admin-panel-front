import { JSX } from "react";

import Box from "@mui/material/Box";

type Props = {
  width?: number | { sm?: number; md?: number; lg?: number };
  color: string;
};

export default function ColorBox({ width = 24, color }: Props): JSX.Element {
  return (
    <Box
      sx={{
        width: width,
        height: width,
        borderRadius: 2,
        backgroundColor: color,
      }}
    />
  );
}
