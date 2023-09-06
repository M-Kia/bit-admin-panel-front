"use client";
import { JSX } from "react";

import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel, { formLabelClasses } from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import Input from "@/components/kit/form/Input";
import Button from "@/components/kit/form/Button";

const Genders = ["male", "female", "other"];

export default function EditProfileForm(): JSX.Element {
  return (
    <Stack
      component="form"
      sx={{
        marginTop: 32,
        maxWidth: 388,
      }}
    >
      <Input label="Full name" placeholder="Enter your full name" />
      <Input
        label="Birthday"
        placeholder="Select your birth date"
        type="date"
      />
      <FormControl>
        <FormLabel
          id="demo-radio-buttons-group-label"
          sx={{
            fontSize: 14,
            fontWeight: 700,
            color: "var(--color-grey-190)",
            [`&.${formLabelClasses.focused}`]: {
              color: "inherit",
            },
          }}
        >
          Gender
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          {Genders.map((gender) => (
            <FormControlLabel
              key={`gender-${gender}`}
              value={gender}
              control={<Radio />}
              label={gender}
              sx={{
                fontSize: 14,
                textTransform: "capitalize",
              }}
            />
          ))}
        </RadioGroup>
      </FormControl>
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
  );
}
