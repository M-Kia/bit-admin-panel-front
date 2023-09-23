import { JSX } from "react";

import AddProduct from "./Add";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Link from "@/components/kit/navbar/Link";

export default function ProductHeader(): JSX.Element {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography
        component="h1"
        variant="h5"
        sx={{
          fontSize: { sm: 18, md: 20, lg: 24 },
          fontWeight: { sm: 600, lg: 700 },
        }}
      >
        Product
      </Typography>
      <AddProduct />
    </Stack>
  );
}
