"use client";
import { JSX, useState } from "react";
import AddEditProduct from "./AddEdit";

import Button from "../kit/form/Button";

import AddIcon from "@mui/icons-material/Add";

export default function AddProduct(): JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        sx={{ fontSize: 14, fontWeight: 600, width: 153, height: 32 }}
        startIcon={<AddIcon />}
        onClick={() => setOpen(true)}
      >
        New product
      </Button>
      <AddEditProduct open={open} onClose={() => setOpen(false)} />
    </>
  );
}
