"use client";
import { useState, useMemo, JSX } from "react";

import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput, {
  outlinedInputClasses,
} from "@mui/material/OutlinedInput";
import { InputBaseProps } from "@mui/material/InputBase";
import InputLabel, {inputLabelClasses} from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

type Props = InputBaseProps & {
  label?: string;
};
export default function Input({
  label,
  id: inputId,
  type,
  endAdornment,
  error,
  "aria-errormessage": errorMessage,
  ...inputProps
}: Props): JSX.Element {
  const [showPassword, setShowPassword] = useState(false);

  const id = useMemo(
    () =>
      inputId ??
      "" + (new Date().getDate() + Math.floor(Math.random() * 100000000)),
    [inputId]
  );

  return (
    <FormControl
      component="div"
      variant="standard"
      sx={{
        width: "100%",
        paddingTop: 21,
      }}
    >
      <InputLabel
        shrink
        htmlFor={id}
        sx={{
          fontWeight: 600,
          fontSize: 14,
          height: 20,
          margin: "5px 0",
          color: "var(--color-grey-190)",
          transform: "translate(0, -8px)",
          [`&.${inputLabelClasses.focused}`]: {
            color: "inherit",
          },
        }}
      >
        {label}
      </InputLabel>
      <OutlinedInput
        id={id}
        type={type !== "password" ? type : showPassword ? "text" : "password"}
        endAdornment={
          type !== "password" ? (
            endAdornment
          ) : (
            <InputAdornment
              position="end"
              sx={{
                width: 32,
                height: 32,
              }}
            >
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword((prev) => !prev)}
                onMouseDown={(event) => event.preventDefault()}
                edge="end"
              >
                {showPassword ? (
                  <VisibilityOff
                    sx={{
                      color: "var(--color-primary-main)",
                      width: 16,
                      height: 16,
                    }}
                  />
                ) : (
                  <Visibility
                    sx={{
                      color: "var(--color-primary-main)",
                      width: 16,
                      height: 16,
                    }}
                  />
                )}
              </IconButton>
            </InputAdornment>
          )
        }
        sx={{
          borderRadius: 2,
          position: "relative",
          height: 32,
          fontSize: 14,
          paddingRight:
            type === "password" || endAdornment !== undefined ? 8 : 0,
          transition: "border-color 0.4s ease-in-out",
          fontFamily: "Segoe UI",
          color: "var(--color-custom-grey-190)",
          [`& .${outlinedInputClasses.input}`]: {
            padding: "6px 8px",
            "&::placeholder": {
              fontFamily: "Segoe UI",
              fontSize: 14,
              opacity: 1,
            },
          },
          [`& .${outlinedInputClasses.root}`]: {
            border: `1px solid var(--color${
              error ? "-status-error" : "-custom-grey-110"
            })`,
          },
          [`& .${outlinedInputClasses.focused}`]: {
            border: "2px solid var(--color-primary-main)",
          },
          ...inputProps.sx,
        }}
        {...inputProps}
      />
      <Box
        sx={{
          height: 16,
          color: "#A4262C",
          fontSize: 12,
          marginTop: 4,
        }}
      >
        {error && errorMessage}
      </Box>
    </FormControl>
  );
}
