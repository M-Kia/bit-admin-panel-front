import { JSX } from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import LogoIcon from "../icon/Logo";

export default function LoadingScreen(): JSX.Element {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        bgcolor: "var(--color-custom-blue-1)",
        position: "fixed",
        width: "100%",
        height: "100%",
        margin: 0,
      }}
    >
      <LogoIcon
        sx={{
          width: {
            sm: 60,
            md: 126,
            lg: 240,
          },
          height: {
            sm: 40,
            md: 84,
            lg: 160,
          },
          "& path": { fill: "var(--color-primary-light)" },
        }}
      />
      <Typography
        sx={{
          color: "var(--color-custom-grey-60)",
          textTransform: "capitalize",
          fontWeight: 600,
          marginTop: {
            sm: 16,
            md: 24,
            lg: 32,
          },
          fontSize: {
            sm: 12,
            md: 18,
            lg: 28,
          },
        }}
      >
        admin panel template
      </Typography>
    </Stack>
  );
}
