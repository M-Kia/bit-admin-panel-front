import { JSX, PropsWithChildren } from "react";

import Box from "@mui/material/Box";

export default function MainPanel({ children }: PropsWithChildren): JSX.Element {
  return (
    <Box
      component="main"
      sx={{
        width: "100%",
        padding: {
          sm: "70px 16px 50px",
          md: "80px 24px 50px",
          lg: "80px 47px 50px",
        },
      }}
    >
      {children}
    </Box>
  );
}
