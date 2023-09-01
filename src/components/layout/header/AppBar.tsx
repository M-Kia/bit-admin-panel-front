"use client";
import {
  JSX,
  PropsWithChildren,
  MouseEvent,
  useState,
  SetStateAction,
  useMemo,
} from "react";
import { usePathname } from "next/navigation";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";

import Link from "@/components/kit/navbar/Link";
import { closeDrawerWidth, openDrawerWidth } from "./Drawer";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

type Props = {
  largeScreen: boolean;
  open: boolean;
  handleDrawerOpen: () => void;
};

export default function AppBar({
  largeScreen,
  open,
  handleDrawerOpen,
}: Props): JSX.Element {
  const url = usePathname();
  const pages = url.split("/");

  const breadcrumbs = useMemo(() => {
    let path = "";
    return pages.reduce<JSX.Element[]>((result, page, index) => {
      const temp = page.split("?").shift()?.toLowerCase();
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
  }, [pages]);

  // const breadcrumbs = [
  //   <Link
  //     key="1"
  //     color="inherit"
  //     href="/product-catalogue"
  //     style={{
  //       textTransform: "capitalize",
  //       fontSize: 14,
  //       textDecoration: "none",
  //       color: "var(--color-custom-grey-130)",
  //     }}
  //   >
  //     product catalogue
  //   </Link>,
  //   <Link
  //     key="2"
  //     color="inherit"
  //     href="/product-catalogue/categories"
  //     style={{
  //       textTransform: "capitalize",
  //       fontSize: 14,
  //       textDecoration: "none",
  //       color: "var(--color-custom-grey-190)",
  //     }}
  //   >
  //     categories
  //   </Link>,
  // ];

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

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
        padding: "0 112px 0 15px",
        display: "flex",
        flexDirection: "row",
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
                    marginLeft: openDrawerWidth,
                    width: `calc(100% - ${openDrawerWidth}px)`,
                  }
                : {
                    width: `calc(100% - ${closeDrawerWidth}px)`,
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
          marginRight: 5,
          ...(open && { display: { lg: "none" } }),
        }}
      >
        <MenuIcon
          sx={{ width: 24, height: 24, color: "var(--color-custom-blue-1)" }}
        />
      </IconButton>
      <Container sx={{ flexGrow: 1 }}>
        <Toolbar>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            sx={{ flexGrow: 1 }}
          >
            {breadcrumbs}
          </Breadcrumbs>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
          \
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
}
