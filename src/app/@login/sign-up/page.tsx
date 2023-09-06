"use client";
import {
  FormEventHandler,
  JSX,
  SyntheticEvent,
  useCallback,
  useState,
} from "react";
import Link from "next/link";

import { RemoveCircleOutlineRounded } from "@mui/icons-material";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";

import Button from "@/components/kit/form/Button";
import Input from "@/components/kit/form/Input";

export default function SignUp(): JSX.Element {
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

  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={submitHandler}
      sx={{
        margin: "0 auto",
        width: {
          sm: 328,
          md: 348,
          lg: 384,
        },
      }}
    >
      <Stack spacing="4px">
        <Input
          label="Email"
          id="bit-email"
          name="email"
          placeholder="Name@BitPlatform.dev"
          // error
          aria-errormessage="Please enter a valid email format."
        />
        <Input
          label="Password"
          id="bit-password"
          name="password"
          type="password"
          placeholder="123456789"
          // error
          aria-errormessage="4 characters minimum."
        />

        <FormControlLabel
          control={<Checkbox />}
          label={
            <>
              I agree to the Bit <Link href="/rules">Privacy Policy</Link>
            </>
          }
          sx={{
            "& .MuiFormControlLabel-label": {
              fontSize: "14px",
              color: "var(--color-custom-grey-190)",
              "& a": {
                textDecoration: "none",
                color: "var(--color-primary-main)",
              },
            },
          }}
        />
      </Stack>
      <Stack
        spacing="24px"
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: "40px" }}
      >
        <Button
          variant="contained"
          sx={{ padding: "6px 20px", fontSize: "14px", fontWeight: "600" }}
          type="submit"
          // disabled
        >
          Sign up
        </Button>
        <Box
          sx={{
            fontSize: "14px",
            "& span": {
              display: "inline-block",
              marginRight: "8px",
            },
            "& a": {
              color: "var(--color-primary-main)",
              textDecoration: "none",
            },
          }}
        >
          <span>Already on Bit?</span>
          <Link href="/sign-in">Sign in</Link>
        </Box>
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
    </Box>
  );
}
