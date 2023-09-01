"use client";
import {
  SyntheticEvent,
  FormEventHandler,
  JSX,
  useState,
  useCallback,
} from "react";
import Link from "next/link";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Alert, { alertClasses } from "@mui/material/Alert";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Snackbar from "@mui/material/Snackbar";

import Input from "@/components/kit/form/Input";
import Button from "@/components/kit/form/Button";

export default function SignIn(): JSX.Element {
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
      setIsLoading(true);
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
        <Box sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            sx={{
              width: 80,
              height: 34,
              verticalAlign: "middle",
              padding: "6px 20px",
              fontSize: "14px",
              fontWeight: "600",
            }}
            type="submit"
            // disabled
            loading={isLoading}
          >
            Sign up
          </Button>
        </Box>
      </Stack>
      <Stack
        spacing="24px"
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: "50px" }}
      >
        <Box
          sx={{
            fontSize: "14px",
            "& a": {
              color: "var(--color-primary-main)",
              textDecoration: "none",
            },
          }}
        >
          <Link href="/sign-up">forget password?</Link>
        </Box>
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
          <span>Don&apos;t have an account?</span>
          <Link href="/sign-up">Sign up</Link>
        </Box>
      </Stack>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={showAlert}
        onClose={snackbarCloseHandler}
        sx={{
          top: { sm: 16, md: 228 + 24, lg: 40 },
          right: { sm: 16, md: 24, lg: 47 },
          left: { sm: 16, md: 24, lg: 708 + 47 },
          width: {
            sm: `calc(100% - ${16 * 2}px)`,
            md: `calc(100% - ${24 * 2}px)`,
            lg: `calc(100% - ${47 * 2 + 708}px)`,
          },
          transform: "none !important",
        }}
      >
        <Alert
          severity="info"
          sx={{
            width: "100%",
            fontSize: 12,
            padding: "4px 12px",
            backgroundColor: "var(--color-custom-grey-20)",
            [`& .${alertClasses.icon}, & .${alertClasses.message}`]: {
              marginRight: 8,
              padding: "4px 0",
            },
            [`& .${alertClasses.icon}`]: {
              color: "var(--color-custom-grey-130)",
            },
            [`& .${alertClasses.message}`]: {
              color: "var(--color-custom-grey-190)",
            },
            [`& .${alertClasses.action}`]: {
              marginRight: { sm: 5, md: 47 },
            },
          }}
          action={
            <Button
              sx={{
                padding: "2px 20px",
                width: 82,
                height: 24,
                fontSize: 14,
                fontWeight: 600,
                border: "1px solid var(--color-custom-grey-110)",
                backgroundColor: "#ffffff",
                color: "var(--color-custom-grey-190)",
                "&:hover, &: active, &:focus": {
                  backgroundColor: "#FAFAFA",
                  border: "1px solid var(--color-custom-grey-110)",
                },
              }}
            >
              Privacy
            </Button>
          }
        >
          Our site may use cookies to enhance use experience
        </Alert>
      </Snackbar>
    </Box>
  );
}
