"use client";
import { JSX, useState } from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Input from "@/components/kit/form/Input";
import ColorBox from "@/components/kit/form/ColorBox";
import {
  ColorPickerButton,
  ColorPickerBox,
} from "@/components/kit/form/ColorPicker";

const colors = [
  "#FFCD56",
  "#FF6384",
  "#48C0C0",
  "#FF9124",
  "#2b88d8",
  "#c7e0f4",
];

type Props = {
  name: string;
  color: string;
};

export default function CategoryForm({
  name: defaultName,
  color: defaultColor,
}: Props): JSX.Element {
  const [name, setName] = useState(defaultName);
  const [selectedColor, setSelectedColor] = useState(defaultColor);

  return (
    <Stack
      sx={{
        marginTop: 32,
        width: {
          lg: 388,
        },
      }}
    >
      <Input label="Name" placeholder="Enter Category Name" />
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          fontSize: 14,
          height: 20,
          margin: "5px 0 16px",
          color: "var(--color-grey-190)",
        }}
      >
        Color
      </Typography>
      <Stack direction="row" spacing={12}>
        {colors.map((color, index) => (
          <ColorPickerBox
            key={`color-picker-box-${index}`}
            width={{sm: 28, md: 32}}
            color={color}
            onClick={() => setSelectedColor(color)}
            selected={selectedColor === color}
          />
        ))}
        <ColorPickerButton color={selectedColor} setColor={setSelectedColor} />
      </Stack>
    </Stack>
  );
}
