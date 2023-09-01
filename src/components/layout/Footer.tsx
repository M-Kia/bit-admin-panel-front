"use client";
import { JSX } from "react";

import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

import GithubIcon from "../kit/icon/Github";
import LinkedInIcon from "../kit/icon/LinkedIn";

const mail = "mail.to@no.where";

const icons = [TwitterIcon, GithubIcon, YouTubeIcon, LinkedInIcon];

type Props = {
  drawerWidth: number;
};

export default function Footer({ drawerWidth }: Props): JSX.Element {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        padding: "12px 48px",
        backgroundColor: "#ffffff",
        position: "fixed",
        bottom: 0,
        right: 0,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: (theme) =>
          theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
      }}
    >
      <Typography
        variant="subtitle2"
        component="a"
        href={`mailto:${mail}`}
        sx={{
          textDecoration: "none",
          color: "var(--color-custom-grey-150)",
          fontSize: 12,
        }}
      >
        {mail}
      </Typography>
      <Stack direction="row" spacing={12}>
        {icons.map((Component) => (
          <IconButton
            key={`icon-${Component.name}`}
            sx={{
              border: "1px solid var(--color-custom-blue-2)",
              borderRadius: "50%",
              width: 24,
              height: 24,
              padding: 6,
            }}
          >
            <Component
              sx={{
                width: 14,
                height: 14,
                color: "var(--color-custom-blue-2)",
              }}
            />
          </IconButton>
        ))}
      </Stack>
      <Typography
        variant="subtitle1"
        sx={{ color: "var(--color-custom-grey-150)", fontSize: 10 }}
      >
        Made with <span style={{ color: "red" }}>❤</span> using bit platform!
      </Typography>
    </Stack>
  );
}
