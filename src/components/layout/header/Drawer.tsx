"use client";
import { JSX } from "react";

import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";
import DrawerList from "./DrawerList";

export const openDrawerWidth = 206;
export const closeDrawerWidth = 72;

type Props = {
  largeScreen: boolean;
  open: boolean;
  closeDrawer: () => void;
};

export default function Drawer({
  largeScreen,
  open,
  closeDrawer,
}: Props): JSX.Element {
  return (
    <>
      <MuiDrawer
        variant={largeScreen ? "permanent" : "temporary"}
        open={open}
        onClose={closeDrawer}
        sx={{
          flexShrink: 0,
          whiteSpace: "nowrap",
          boxSizing: "border-box",
          ...(!largeScreen
            ? { width: openDrawerWidth }
            : open
            ? {
                width: openDrawerWidth,
                transition: (theme) =>
                  theme.transitions.create("width", {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                  }),
                overflowX: "hidden",
              }
            : {
                transition: (theme) =>
                  theme.transitions.create("width", {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                  }),
                overflowX: "hidden",
                width: closeDrawerWidth,
              }),
          [`& .${drawerClasses.paper}`]: {
            ...(largeScreen
              ? open
                ? {
                    width: openDrawerWidth,
                    transition: (theme) =>
                      theme.transitions.create("width", {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.enteringScreen,
                      }),
                    overflowX: "hidden",
                  }
                : {
                    transition: (theme) =>
                      theme.transitions.create("width", {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                      }),
                    overflowX: "hidden",
                    width: closeDrawerWidth,
                  }
              : { width: openDrawerWidth }),
            backgroundColor: "var(--color-custom-blue-1)",
            color: "var(--color-primary-light)",
          },
        }}
      >
        <DrawerList open={open} closeDrawer={closeDrawer} />
      </MuiDrawer>
    </>
  );
}
