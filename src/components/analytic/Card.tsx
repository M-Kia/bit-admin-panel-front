import { JSX } from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import CardCircleSvg from "./CardCircleSvg";

const transitionStyle = "0.3s ease-in-out";

type Props = {
  label: string;
  value: number;
};

export default function AnalyticsCard({ label, value }: Props): JSX.Element {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "#ffffff",
        width: {sm: 154, md: 162, lg: 267},
        height: {sm: 144, md: 160, lg: 168},
        overflow: "hidden",
        borderRadius: 8,
        border: "1px solid var(--color-primary-light)",
        transition: `background-color ${transitionStyle}`,
        "&:hover": {
          backgroundColor: "var(--color-primary-main)",
          "& .analytic-card__svg": {
            "& circle:first-child": {
              r: {sm: 87,lg: 117},
              fill: "#E5F0FF",
            },
            "& circle:last-child": {
              r: {sm: 61,lg: 84},
              fill: "#E5F0FF",
            },
          },
          "& .analytic-card__value, & .analytic-card__label": {
            color: "#ffffff",
          },
        },
      }}
    >
      <CardCircleSvg
        className="analytic-card__svg"
        sx={{
          position: "absolute",
          zIndex: 1,
          top: 0,
          right: 0,
          width: 128,
          height: "100%",
          transition: transitionStyle,
          "& circle": {
            opacity: 0.3,
            transition: transitionStyle,
            cx: {sm: 115,lg: 117},
            cy: {sm: 25,lg: 84},
            "&:first-child": {
              r: {sm: 71,lg: 95},
              fill: "#D0E4FF",
            },
            "&:last-child": {
              r: {sm: 45,lg: 62},
              fill: "#CEE3FF",
            },
          },
        }}
      />
      <Stack
        sx={{
          position: "absolute",
          padding: 24,
          backgroundColor: "transparent",
          zIndex: 2,
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        }}
        spacing={24}
      >
        <Typography
          className="analytic-card__value"
          variant="h5"
          component="p"
          sx={{
            width: "fit-content",
            fontSize: 32,
            fontWeight: 600,
            color: "var(--color-primary-main)",
            borderBottom: "2px solid #ffe25e",
            transition: `color ${transitionStyle}`,
          }}
        >
          {value}
        </Typography>
        <Typography
          className="analytic-card__label"
          variant="body2"
          component="h3"
          sx={{
            fontSize: 20,
            color: "var(--color-custom-grey-190)",
            textTransform: "capitalize",
            transition: `color ${transitionStyle}`,
          }}
        >
          {label}
        </Typography>
      </Stack>
    </Box>
  );
}
