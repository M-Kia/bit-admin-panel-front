"use client";
import { JSX, SyntheticEvent, useCallback, useState, useMemo } from "react";
import Link from "next/link";

import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";

import Button from "@/components/kit/form/Button";
import Input from "@/components/kit/form/Input";

import RemoveCircleOutlineRounded from "@mui/icons-material/RemoveCircleOutlineRounded";

import {
  useForm,
  Controller,
  SubmitHandler,
  Control,
  useWatch,
} from "react-hook-form";

import { FormValues, defaultValues } from "@/components/user/type";

export default function SignUpForm(): JSX.Element {
  const {
    handleSubmit,
    formState: { errors },
    control,
    getValues,
  } = useForm<FormValues>({
    defaultValues,
  });

  const [showAlert, setShowAlert] = useState(false);
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);

  const snackbarCloseHandler = useCallback(
    (event: SyntheticEvent | Event, reason: string) => {
      if (reason === "clickaway") {
        return;
      }

      setShowAlert(false);
    },
    []
  );

  const submitHandler = useCallback<SubmitHandler<FormValues>>((data) => {
    fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
        setShowAlert(true);
      });
  }, []);

  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={handleSubmit(submitHandler)}
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
        <Controller
          control={control}
          name="email"
          rules={{
            required: "Please enter your email.",
            pattern: {
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              message: "Please enter a valid email address.",
            },
          }}
          render={({ field }) => (
            <Input
              label="Email"
              placeholder="Name@BitPlatform.dev"
              error={errors?.email !== undefined}
              errorMessage={errors?.email?.message}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={{
            required: "Please enter your password.",
            minLength: {
              value: 4,
              message: "4 characters minimum.",
            },
            maxLength: {
              value: 16,
              message: "16 characters maximum.",
            },
          }}
          render={({ field }) => (
            <Input
              label="Password"
              placeholder="123456789"
              type="password"
              error={errors?.password !== undefined}
              errorMessage={errors?.password?.message}
              {...field}
            />
          )}
        />
        <FormControlLabel
          control={
            <Checkbox
              value={agreedToPrivacy}
              onChange={() => setAgreedToPrivacy((prev) => !prev)}
            />
          }
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
        <SubmitButton control={control} agreedToPrivacy={agreedToPrivacy} />
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

type SubmitButtonProps = {
  control: Control<FormValues>;
  agreedToPrivacy: boolean;
};

function SubmitButton({ control, agreedToPrivacy }: SubmitButtonProps) {
  const temp = useWatch({ control, name: ["email", "password"] });

  return (
    <Button
      variant="contained"
      sx={{ padding: "6px 20px", fontSize: "14px", fontWeight: "600" }}
      type="submit"
      disabled={
        temp[0].trim() === "" || temp[1].trim() === "" || !agreedToPrivacy
      }
    >
      Sign up
    </Button>
  );
}
