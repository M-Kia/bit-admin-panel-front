"use client";
import { JSX, MouseEvent, useState, useMemo } from "react";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";

import Link from "@/components/kit/navbar/Link";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import LogoIcon from "@/components/kit/icon/Logo";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

type Props = {
  url: string;
  largeScreen: boolean;
  minDrawerWidth: number;
  maxDrawerWidth: number;
  open: boolean;
  handleDrawerOpen: () => void;
};

export default function AppBar({
  url,
  largeScreen,
  minDrawerWidth,
  maxDrawerWidth,
  open,
  handleDrawerOpen,
}: Props): JSX.Element {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const breadcrumbs = useMemo(() => {
    const pages = url.split("/");
    let path = "";
    return pages.reduce<JSX.Element[]>((result, page, index) => {
      const temp = page.split("?").shift()?.toLowerCase();
      if (temp?.trim() === "") {
        return result;
      }
      path += "/" + temp;
      return [
        ...result,
        <Link
          key={`breadcrumbs-${index}`}
          color="inherit"
          href={path}
          style={{
            textTransform: "capitalize",
            fontSize: 14,
            textDecoration: "none",
            color:
              index + 1 === pages.length
                ? "var(--color-custom-grey-190)"
                : "var(--color-custom-grey-130)",
          }}
        >
          {temp?.replaceAll("-", " ")}
        </Link>,
      ];
    }, []);
  }, [url]);

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <MuiAppBar
      position="fixed"
      sx={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid var(--color-custom-grey-10)",
        padding: { sm: "8px 16px", md: "0 24px", lg: "0 48px 0 15px" },
        display: "flex",
        flexDirection: "row",
        height: {sm: 48},
        alignItems: "center",
        ...(!largeScreen
          ? { width: "100%", zIndex: 1100 }
          : {
              transition: (theme) =>
                theme.transitions.create(["width", "margin"], {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.leavingScreen,
                }),
              ...(open
                ? {
                    marginLeft: maxDrawerWidth,
                    width: `calc(100% - ${maxDrawerWidth}px)`,
                  }
                : {
                    width: `calc(100% - ${minDrawerWidth}px)`,
                  }),
            }),
      }}
      elevation={0}
    >
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{
          marginRight: { sm: 16, lg: 84 },
          ...(open && largeScreen && { display: "none" }),
        }}
      >
        <MenuIcon
          sx={{ width: 24, height: 24, color: "var(--color-custom-blue-1)" }}
        />
      </IconButton>
      <Toolbar sx={{ flexGrow: 1, minHeight: {sm: 0} }}>
        <Stack direction="row" spacing={16} sx={{ flexGrow: 1 }}>
          <LogoIcon
            sx={{
              display: { lg: "none" },
              width: 30,
              height: 20,
              color: "#0065EF",
            }}
          />
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            sx={{
              display: { sm: "none", md: "block" },
            }}
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton
              onClick={handleOpenUserMenu}
              sx={{ width: 32, height: 32, padding: 0 }}
            >
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/2.jpg"
                sx={{ width: 32, height: 32 }}
              />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
}
