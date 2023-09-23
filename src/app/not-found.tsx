import { JSX } from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Button from "@/components/kit/form/Button";
import Link from "@/components/kit/navbar/Link";

import Error404Icon from "@/components/kit/icon/Error404";


export default function NotFound(): JSX.Element {
  return (
    <Stack
      spacing={{sm: 40, md: 56}}
      justifyContent="center"
      alignItems="center"
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "var(--color-custom-blue-1)",
      }}
    >
      <Box>
        <Error404Icon sx={{ width: {sm: 154, md: 224, lg: 244}, height: {sm: 62, md: 90, lg: 98} }} />
      </Box>
      <Typography variant="h1" sx={{ color: "#ffffff", fontSize: {sm: 20, md: 28, lg: 32}, fontWeight: 600 }}>
        Ooops, Something went wrong.
      </Typography>
      <Link href="/">
        <Button>Go to home page</Button>
      </Link>
    </Stack>
  );
}
