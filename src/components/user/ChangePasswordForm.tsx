"use client";
import { JSX, FormEventHandler, SyntheticEvent, useCallback, useState } from "react";

import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import RemoveCircleOutlineRounded from "@mui/icons-material/RemoveCircleOutlineRounded";

import Input from "@/components/kit/form/Input";
import Button from "@/components/kit/form/Button";

export default function ChangePasswordForm(): JSX.Element {
  const [showAlert, setShowAlert] = useState(false);

  const snackbarCloseHandler = useCallback(
    (event: SyntheticEvent | Event, reason: string) => {
      if (reason === "clickaway") {
        return;
      }

      setShowAlert(false);
    },
    []
  );

  const submitHandler = useCallback<FormEventHandler<HTMLFormElement>>(
    (event) => {
      event.preventDefault();
      setShowAlert(true);
    },
    []
  );

  return (<>
    <Stack
      component="form"
      onSubmit={submitHandler}
      sx={{
        marginTop: 32,
        maxWidth: 388,
      }}
      >
      <Input label="Old password" placeholder="Enter old password" />
      <Input label="New password" placeholder="Enter new password" />
      <Input
        label="Confirm new password"
        placeholder="Enter new password again"
        />
      <Button
        sx={{
          marginTop: "48px !important",
          width: 70,
          height: 32,
          fontSize: 14,
          fontWeight: 600,
        }}
        // disabled
      >
        Save
      </Button>
    </Stack>
    <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={showAlert}
        autoHideDuration={3000}
        onClose={snackbarCloseHandler}
        sx={{
          top: { sm: 16, md: 228 + 24 , lg: 40},
          right: { sm: 16, md: 24 , lg: 47},
          left: { sm: 16, md: 24 , lg: 708 + 47},
          width: {
            sm: `calc(100% - ${16 * 2}px)`,
            md: `calc(100% - ${24 * 2}px)`,
            lg: `calc(100% - ${(47 * 2) + 708}px)`,
          },
          transform: "none !important",
        }}
      >
        <Alert
          iconMapping={{
            error: (
              <RemoveCircleOutlineRounded sx={{ width: 16, height: 16 }} />
            ),
          }}
          severity="error"
          sx={{
            width: "100%",
            fontSize: 12,
            padding: "8px 12px",
            ".MuiAlert-icon, .MuiAlert-message": {
              marginRight: 8,
              padding: 0,
            },
          }}
        >
          Message about the state of this view
        </Alert>
      </Snackbar>
        </>
  );
}
