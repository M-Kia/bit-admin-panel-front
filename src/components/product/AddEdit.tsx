"use client";
import { JSX, MouseEventHandler } from "react";

import Stack from "@mui/material/Stack";
import Dialog, { dialogClasses } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import Button from "@/components/kit/form/Button";
import Input from "@/components/kit/form/Input";
import Select, { SelectItemType } from "@/components/kit/form/Select";

import { ProductType } from "./type";

type Props = {
  previousData?: ProductType;
  open: boolean;
  onClose: () => void;
};

const data: SelectItemType = [
  {
    label: "Category01",
    value: "C01",
  },
  {
    label: "Category02",
    value: "C02",
  },
  {
    label: "Category03",
    value: "C03",
  },
  {
    label: "Category04",
    value: "C04",
  },
  {
    label: "Category05",
    value: "C05",
  },
  {
    label: "Category06",
    value: "C06",
  },
  {
    label: "Category07",
    value: "C07",
  },
  {
    label: "Category08",
    value: "C08",
  },
  {
    label: "Category09",
    value: "C09",
  },
  {
    label: "Category10",
    value: "C10",
  },
  {
    label: "Category11",
    value: "C11",
  },
  {
    label: "Category12",
    value: "C12",
  },
];

export default function AddEditProduct({
  previousData,
  open,
  onClose,
}: Props): JSX.Element {
  const confirmAction = () => null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        [`& .${dialogClasses.container}`]: {
          alignItems: {
            sm: "flex-end",
            md: "center",
          },
        },
        [`& .${dialogClasses.paper}`]: {
          margin: { sm: 0, md: 32 },
          maxWidth: {
            sm: "100%",
            md: 560,
          },
          width: "100%",
        },
      }}
    >
      <DialogTitle
        id="alert-dialog-title"
        sx={{
          fontSize: 20,
          fontWeight: 600,
          color: "var(--color-custom-grey-190)",
        }}
      >
        {previousData !== undefined ? "Edit" : "New"} Product
      </DialogTitle>
      <DialogContent sx={{ paddingBottom: { sm: 64, md: 0 } }}>
        <Stack component="form">
          <Input label="Name" placeholder="Enter product name" />
          <Select
            label="Category"
            placeholder="Select a category"
            items={data}
          />
          <Input label="Price" placeholder="Enter price" />
        </Stack>
      </DialogContent>
      <DialogActions
        sx={{ padding: 0, marginTop: 16, marginX: 24, marginBottom: 24 }}
      >
        <Button onClick={confirmAction}>Save</Button>
        <Button
          onClick={onClose}
          sx={{
            "&, &:hover": {
              outline: "1px solid var(--color-custom-grey-110)",
              backgroundColor: "#ffffff",
              color: "var(--color-custom-grey-190)",
            },
          }}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
