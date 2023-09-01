import { JSX, PropsWithChildren } from "react";
import { headers } from "next/headers";
import Image from "next/image";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import LogoIcon from "@/components/kit/icon/Logo";

import loginImage from "@/assets/images/login-image.png";
import LoginImage from "@/components/kit/icon/LoginImage";

type Props = PropsWithChildren;

export default async function LoginLayout({
  children,
}: Props): Promise<JSX.Element> {
  const url = headers().get("x-url")?.valueOf() ?? "";

  const pageUrl = url.split("/").pop()?.split("?").shift()?.toLowerCase();
  
  return (
    <Box
      component="main"
      sx={{
        display: {
          sm: "block",
          md: "flex",
        },
        flexDirection: { md: "column", lg: "row" },
        width: "100%",
        height: "100%",
        ".logo": {
          width: { sm: 30, md: 40 },
          height: { sm: 20, md: 26 },
          position: "fixed",
          top: 32,
          left: 32,
          "& path": {
            fill: {
              sm: "#0065ef",
              md: "var(--color-primary-light)",
            },
          },
        },
      }}
    >
      <LogoIcon className="logo" />
      <Stack
        display={{ sm: "none", md: "flex" }}
        justifyContent="space-between"
        alignItems={{ sm: "flex-end", lg: "flex-start" }}
        spacing={52}
        direction={{
          sm: "row",
          lg: "column-reverse",
        }}
        sx={{
          padding: { sm: "24px 32px", lg: "135px 76px 108px" },
          backgroundColor: "var(--color-custom-blue-1)",
          maxWidth: {
            lg: 708,
          },
        }}
      >
        <Box
          sx={{
            lineHeight: 20,
            textAlign: "justify",
            color: "#ffffff",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: {
                sm: 20,
                lg: 28,
              },
              fontWeight: 600,
              marginBottom: 12,
            }}
          >
            Admin Panel Template
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: { sm: 14, lg: 16 },
            }}
          >
            Admin Panel Template is a project template that provides common
            features such as Sign-up & Sign-in. This template is powered by Bit
            Platform components.
          </Typography>
        </Box>
        <Box
          sx={{
            position: "relative",
            minWidth: 288,
            "& svg": {
              width: "100%",
              height: {
                sm: 180,
                lg: 384,
              },
            },
          }}
        >
          <LoginImage />
        </Box>
      </Stack>
      <Box sx={{ padding: 16, width: "100%" }}>
        <Typography
          variant="h1"
          textAlign="center"
          sx={{
            marginTop: {
              sm: 64,
              md: 140,
              lg: 136
            },
            marginX: "auto",
            marginBottom: 56,
            fontWeight: 600,
            fontSize: {
              sm: 28,
              md: 32,
              lg: 42,
            },
          }}
        >
          {pageUrl === "sign-up" ? "Sign up" : "Sign in"}
        </Typography>
        {children}
      </Box>
    </Box>
  );
}
