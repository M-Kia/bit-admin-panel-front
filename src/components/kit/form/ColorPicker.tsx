"use client";
import {
  JSX,
  Dispatch,
  SetStateAction,
  useState,
  MouseEventHandler,
} from "react";

import Box from "@mui/material/Box";
import { ChromePicker } from "react-color";

import Button from "./Button";
import ColorBox from "./ColorBox";

import CheckIcon from "@mui/icons-material/Check";

type ColorPickerButtonProps = {
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
};

export function ColorPickerButton({
  color,
  setColor,
}: ColorPickerButtonProps): JSX.Element {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  return (
    <Box>
      <Button
        sx={{
          width: { sm: 112, md: 124 },
          height: { sm: 28, md: 32 },
          padding: 4,
          fontSize: 12,
          color: "var(--color-custom-grey-190)",
          "&, &:hover, &:focus, &:active": {
            border: "1px solid var(--color-custom-grey-110)",
            backgroundColor: "transparent",
          },
        }}
        onClick={() => setDisplayColorPicker((prev) => !prev)}
        startIcon={<ColorBox width={{ sm: 20, md: 28 }} color={color} />}
      >
        Custom color
      </Button>
      {displayColorPicker ? (
        <Box sx={{ position: "absolute", zIndex: 2 }}>
          <ChromePicker
            disableAlpha
            color={color}
            onChangeComplete={(color) => {
              setColor(color.hex);
            }}
          />
        </Box>
      ) : null}
    </Box>
  );
}

type ColorPickerBoxProps = {
  width?: number | { sm?: number; md?: number; lg?: number };
  color: string;
  selected?: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
};

export function ColorPickerBox({
  width,
  color,
  selected,
  onClick,
}: ColorPickerBoxProps): JSX.Element {
  return (
    <Box
      sx={{
        width: width,
        height: width,
        borderRadius: 2,
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: color,
        }}
      />
      {selected && (
        <CheckIcon
          sx={{
            width: { sm: 20, md: 24 },
            height: { sm: 20, md: 24 },
            zIndex: 1,
            position: "absolute",
            left: 4,
            top: 4,
            color: "var(--color-custom-grey-190)",
          }}
        />
      )}
    </Box>
  );
}
