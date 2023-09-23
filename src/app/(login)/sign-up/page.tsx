import { JSX } from "react";

import Typography from "@mui/material/Typography";

import SignUpForm from "@/components/user/SignUpForm";

export default function SignUp(): JSX.Element {
  return (
    <>
      <Typography
        variant="h1"
        textAlign="center"
        sx={{
          marginTop: {
            sm: 64,
            md: 140,
            lg: 136,
          },
          marginX: "auto",
          marginBottom: 56,
          fontWeight: 600,
          fontSize: {
            sm: 28,
            md: 32,
            lg: 42,
          },
        }}
      >
        Sign up
      </Typography>
      <SignUpForm />
    </>
  );
}
