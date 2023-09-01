import { JSX } from "react";

import { default as MuiButton, ButtonProps } from "@mui/material/Button";

import CircularLoading from "../loader/CircularLoading";

type Props = ButtonProps & {
  loading?: boolean;
};

export default function Button({
  loading,
  sx,
  disabled,
  children,
  ...props
}: Props): JSX.Element {
  return (
    <MuiButton
      sx={{
        fontFamily: "Segoe UI",
        borderRadius: 2,
        padding: "6px 20px",
        fontSize: 14,
        fontWeight: 600,
        backgroundColor: "var(--color-primary-main)",
        border: "none",
        color: "#ffffff",
        textTransform: "none",
        "&:hover": {
          border: "none",
          boxShadow: "none",
          outline: "1px solid var(--color-primary-main)",
          color: "var(--color-primary-main)",
        },
        "&:active, &:focus": {
          border: "none",
          boxShadow: "none",
        },
        "&:disabled": {
          backgroundColor: "var(--color-custom-grey-20)",
          color: "var(--color-custom-grey-90)",
        },
        ...sx,
      }}
      disabled={disabled}
      {...props}
    >
      {loading ? (
        <CircularLoading size={20} thickness={4} color="inherit" />
      ) : (
        children
      )}
    </MuiButton>
  );
}
