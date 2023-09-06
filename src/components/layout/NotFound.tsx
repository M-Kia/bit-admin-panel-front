import { JSX } from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Button from "@/components/kit/form/Button";
import Link from "@/components/kit/navbar/Link";

import Error404Icon from "@/components/kit/icon/Error404";

import { HOME_ROUTE } from "@/utilities/route";

export default function NotFound(): JSX.Element {
  return (
    <Stack spacing={56}>
      <Box>
        <Error404Icon />
      </Box>
      <Typography variant="h1">Ooops, Something went wrong.</Typography>
      <Link href={HOME_ROUTE}>
        <Button>Go to home page</Button>
      </Link>
    </Stack>
  );
}
