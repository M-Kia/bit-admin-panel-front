"use client";
import { JSX, FormEvent } from "react";

import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import InputBase, { inputBaseClasses } from "@mui/material/InputBase";

import Search from "@mui/icons-material/Search";

export default function CategorySearchBar(): JSX.Element {
  return (
    <Paper
      component="form"
      elevation={0}
      sx={{
        border: "1px solid var(--color-custom-grey-110)",
        borderRadius: 2,
        paddingX: 8,
        maxWidth: {md: 300}
      }}
      onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}
    >
      <IconButton sx={{ padding: 10 }} aria-label="search">
        <Search
          sx={{
            color: "var(--color-primary-main)",
            transform: "rotateY(180deg)",
          }}
        />
      </IconButton>
      <InputBase
        sx={{
          marginLeft: 8,
          flex: 1,
          [`& .${inputBaseClasses.input}`]: {
            color: "var(--color-custom-grey-190)",
            "&::placeholder": {
              opacity: 1,
            },
          },
        }}
        placeholder="Search some product..."
        inputProps={{ "aria-label": "search" }}
      />
    </Paper>
  );
}
