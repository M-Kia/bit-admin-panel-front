import { JSX } from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Link from "@/components/kit/navbar/Link";
import Button from "@/components/kit/form/Button";

import Add from "@mui/icons-material/Add";

export default function CategoryHeader(): JSX.Element {
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
        Categories
      </Typography>
      <Link href="/product-catalogue/categories/new">
        <Button
          sx={{ fontSize: 14, fontWeight: 600, width: 153, height: 32 }}
          startIcon={<Add />}
        >
          New category
        </Button>
      </Link>
    </Stack>
  );
}
