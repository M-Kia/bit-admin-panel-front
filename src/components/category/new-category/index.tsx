import { JSX } from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Link from "@/components/kit/navbar/Link";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CategoryForm from "@/components/category/new-category/Form";

type Props = {
  categoryId?: string;
};

export default function AddEditCategory({ categoryId }: Props): JSX.Element {
  return (
    <>
      <Stack direction="row" alignItems="baseline" spacing={8}>
        <Link
          href="/product-catalogue/categories"
          underline="none"
          color="inherit"
        >
          <ArrowBackIcon width={20} height={20} />
        </Link>
        <Typography
          variant="h5"
          component="h1"
          sx={{
            color: "var(--color-custom-grey-190)",
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          {categoryId === undefined ? "New" : "Edit"} Category
        </Typography>
      </Stack>
      <CategoryForm name="" color="#F0F0F0" />
    </>
  );
}
