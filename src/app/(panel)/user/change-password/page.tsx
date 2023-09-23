import { JSX } from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import ChangePasswordForm from "@/components/user/ChangePasswordForm";
import Link from "@/components/kit/navbar/Link";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function ChangePassword(): JSX.Element {
  return (
    <>
      <Stack direction="row" alignItems="center" spacing={8}>
        <Link
          href="/"
          underline="none"
          color="inherit"
          sx={{
            width: 20,
            height: 20,
          }}
        >
          <ArrowBackIcon width={20} height={20} />
        </Link>
        <Typography
          variant="h5"
          component="h1"
          sx={{
            color: "var(--color-custom-grey-190)",
            fontSize: { sm: 18, md: 20, lg: 24 },
            fontWeight: { sm: 600, lg: 700 },
          }}
        >
          Change password
        </Typography>
      </Stack>
      <ChangePasswordForm />
    </>
  );
}
