"use client";
import { JSX, PropsWithChildren, useState } from "react";
import { usePathname } from "next/navigation";

import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";

import Drawer from "./header/Drawer";
import MainPanel from "./MainPanel";
import Footer from "./Footer";
import AppBar from "./header/AppBar";

type Props = PropsWithChildren;

const minDrawerWidth = 72;
const maxDrawerWidth = 206;

export default function HeaderWithDrawer({ children }: Props): JSX.Element {
  const url = usePathname();

  const theme = useTheme();

  const largeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        url={url}
        minDrawerWidth={minDrawerWidth}
        maxDrawerWidth={maxDrawerWidth}
        largeScreen={largeScreen}
        open={open}
        handleDrawerOpen={() => setOpen(true)}
      />
      <Drawer
        pagePath={url.split("/").pop() ?? ""}
        largeScreen={largeScreen}
        open={open}
        closeDrawer={() => setOpen(false)}
      />
      <MainPanel>{children}</MainPanel>
      <Footer
        drawerWidth={!largeScreen ? 0 : open ? maxDrawerWidth : minDrawerWidth}
      />
    </Box>
  );
}
