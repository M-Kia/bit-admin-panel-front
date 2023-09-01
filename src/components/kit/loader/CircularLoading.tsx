import { JSX } from "react";

import Box from "@mui/material/Box";
import CircularProgress, {
  CircularProgressProps,
  circularProgressClasses,
} from "@mui/material/CircularProgress";

export default function CircularLoading({
  variant,
  sx,
  size,
  thickness,
  value,
  ...props
}: CircularProgressProps): JSX.Element {
  return (
    <Box sx={{ position: "relative", width: size, height: size }}>
      <CircularProgress
        variant="determinate"
        sx={{ color: "#FCFCFC", opacity: "0.5", ...sx }}
        size={size}
        thickness={thickness}
        value={100}
        {...props}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: "#FCFCFC",
          ...sx,
          animationDuration: "550ms",
          position: "absolute",
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
            strokeDasharray: "15px,90px"
          },
        }}
        size={size}
        thickness={thickness}
        value={25}
        {...props}
      />
    </Box>
  );
}
