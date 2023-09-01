"use client";
import { JSX, useState } from "react";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import useTheme from "@mui/material/styles/useTheme";

import Link from "@/components/kit/navbar/Link";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import HomeIcon from "@/components/kit/icon/Home";
import TagIcon from "@/components/kit/icon/Tag";
import LogoIcon from "@/components/kit/icon/Logo";
import CloseXIcon from "@/components/kit/icon/CloseX";

export const openDrawerWidth = 206;
export const closeDrawerWidth = 72;
type Props = {
  open: boolean;
  closeDrawer: () => void;
};

export default function DrawerList({ open, closeDrawer }: Props): JSX.Element {
  const [productCatalogueList, setProductCatalogueList] = useState(false);
  const [dashboardList, setDashboardList] = useState(false);

  const customCloseDrawer = () => {
    closeDrawer();
    setProductCatalogueList(false);
    setDashboardList(false);
  };

  return (
    <>
      <Toolbar
        sx={{
          padding: {sm: 16},
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <LogoIcon
          width={24}
          height={16}
          sx={{
            color: "var(--color-primary-light)",
            minWidth: 24,
            minHeight: 16,
          }}
        />
        {open && (
          <IconButton onClick={customCloseDrawer}>
            <CloseXIcon
              width={24}
              height={24}
              sx={{ color: "var(--color-primary-light)" }}
            />
          </IconButton>
        )}
      </Toolbar>
      <Divider
        sx={{ borderColor: "var(--color-custom-blue-2)", marginBottom: 80 }}
      />
      <List>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
            onClick={() => setDashboardList((prev) => !prev)}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 8 : 0,
                justifyContent: "center",
              }}
            >
              <HomeIcon sx={{ color: "var(--color-primary-light)" }} />
            </ListItemIcon>
            {open && (
              <>
                <ListItemText primary="Dashboard" />
                {dashboardList ? (
                  <ExpandLessIcon
                    sx={{ color: "var(--color-primary-light)" }}
                  />
                ) : (
                  <ExpandMoreIcon
                    sx={{ color: "var(--color-primary-light)" }}
                  />
                )}
              </>
            )}
          </ListItemButton>
          <Collapse in={dashboardList} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link href="/dashboard/analytics">
                <ListItemButton sx={{ pl: 42 }}>
                  <ListItemText primary="Analytics" />
                </ListItemButton>
              </Link>
            </List>
          </Collapse>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
            onClick={() => setProductCatalogueList((prev) => !prev)}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 8 : 0,
                justifyContent: "center",
              }}
            >
              <TagIcon sx={{ color: "var(--color-primary-light)" }} />
            </ListItemIcon>
            {open && (
              <>
                <ListItemText primary="Product Catalogue" />
                {dashboardList ? (
                  <ExpandLessIcon
                    sx={{ color: "var(--color-primary-light)" }}
                  />
                ) : (
                  <ExpandMoreIcon
                    sx={{ color: "var(--color-primary-light)" }}
                  />
                )}
              </>
            )}
          </ListItemButton>
          <Collapse in={productCatalogueList} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link href="/product-catalogue/products">
                <ListItemButton sx={{ pl: 42 }}>
                  <ListItemText primary="Products" />
                </ListItemButton>
              </Link>
              <Link href="/product-catalogue/categories">
                <ListItemButton sx={{ pl: 42 }}>
                  <ListItemText primary="Categories" />
                </ListItemButton>
              </Link>
            </List>
          </Collapse>
        </ListItem>
      </List>
    </>
  );
}
