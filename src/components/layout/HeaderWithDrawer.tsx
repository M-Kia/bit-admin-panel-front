"use client";
import { JSX, PropsWithChildren, useState } from "react";

import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";

import Drawer, { closeDrawerWidth, openDrawerWidth } from "./header/Drawer";
import MainPanel from "./MainPanel";
import Footer from "./Footer";
import AppBar from "./header/AppBar";

type Props = PropsWithChildren;

export default function HeaderWithDrawer({ children }: Props): JSX.Element {
    const theme = useTheme();
  const largeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const [open, setOpen] = useState(false);
  console.log({ largeScreen });

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar largeScreen={largeScreen} open={open} handleDrawerOpen={() => setOpen(true)} />
      <Drawer largeScreen={largeScreen} open={open} closeDrawer={() => setOpen(false)} />
      <MainPanel>{children}</MainPanel>
      <Footer
        drawerWidth={
          !largeScreen ? 0 : open ? openDrawerWidth : closeDrawerWidth
        }
      />
    </Box>
  );
}
