"use client";
import { useState, useMemo, JSX } from "react";

import MuiSelect, { selectClasses, SelectProps } from "@mui/material/Select";
import OutlinedInput, {
  outlinedInputClasses,
} from "@mui/material/OutlinedInput";
import InputLabel, { inputLabelClasses } from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";

import { MenuItem } from "@mui/material";

type ItemType = { label: string | number; value: string | number };

export type SelectItemType = ItemType[];

type Props = SelectProps<string> & {
  items: SelectItemType;
  label?: string;
};

export default function Select({
  items,
  label,
  id: inputId,
  type,
  error,
  "aria-errormessage": errorMessage,
  placeholder,
  sx,
  ...inputProps
}: Props): JSX.Element {
  const id = useMemo(
    () =>
      inputId ??
      "" + (new Date().getDate() + Math.floor(Math.random() * 100000000)),
    [inputId]
  );

  return (
    <FormControl
      component="div"
      fullWidth
      sx={{
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
      <MuiSelect
        id={id}
        sx={{
          borderRadius: 2,
          position: "relative",
          height: 32,
          fontSize: 14,
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
          ...sx,
        }}
        displayEmpty
        renderValue={(selected = "") => {
          if (selected === "") {
            return placeholder ?? "";
          }

          return selected;
        }}
        {...inputProps}
      >
        {items.map((item, index) => (
          <MenuItem key={`${id}-item-${index}`} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </MuiSelect>
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
