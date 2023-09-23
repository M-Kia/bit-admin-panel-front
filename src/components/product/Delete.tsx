"use client";
import { JSX, MouseEventHandler } from "react";

import Dialog, { dialogClasses } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import Button from "@/components/kit/form/Button";

type Props = {
  open: boolean;
  name: string;
  close: () => void;
};

export default function DeleteProduct({
  open,
  name,
  close,
}: Props): JSX.Element {
  const deleteCategory = () => {
    console.log("deleted!");
    close();
  };

  return (
    <Dialog
      open={open}
      onClose={close}
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
        Delete product
      </DialogTitle>
      <DialogContent sx={{ paddingBottom: {sm: 64, md: 0} }}>
        <DialogContentText
          id="alert-dialog-description"
          sx={{
            fontSize: 14,
            color: "var(--color-custom-grey-130)",
          }}
        >
          Are you sure you want to delete the {`'${name}'`}
        </DialogContentText>
      </DialogContent>
      <DialogActions
        sx={{ padding: 0, marginTop: 16, marginX: 24, marginBottom: 24 }}
      >
        <Button onClick={deleteCategory}>Yes</Button>
        <Button
          onClick={close}
          sx={{
            "&, &:hover": {
              outline: "1px solid var(--color-custom-grey-110)",
              backgroundColor: "#ffffff",
              color: "var(--color-custom-grey-190)",
            },
          }}
        >
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
}
