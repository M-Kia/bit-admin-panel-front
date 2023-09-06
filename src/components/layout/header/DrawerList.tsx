"use client";
import { JSX, useState } from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText, { listItemTextClasses } from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";

import Link from "@/components/kit/navbar/Link";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import HomeIcon from "@/components/kit/icon/Home";
import TagIcon from "@/components/kit/icon/Tag";
import LogoIcon from "@/components/kit/icon/Logo";
import CloseXIcon from "@/components/kit/icon/CloseX";

type Props = {
  pagePath: string;
  largeScreen: boolean;
  open: boolean;
  closeDrawer: () => void;
};

export default function DrawerList({
  pagePath,
  largeScreen,
  open,
  closeDrawer,
}: Props): JSX.Element {
  const [productCatalogueList, setProductCatalogueList] = useState(false);
  const [dashboardList, setDashboardList] = useState(false);

  const customCloseDrawer = () => {
    closeDrawer();
    setProductCatalogueList(false);
    setDashboardList(false);
  };

  const shouldHide = !open && largeScreen;

  return (
    <>
      <Toolbar
        sx={{
          padding: { sm: "16px 16px 12px" },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <LogoIcon
          sx={{
            color: "var(--color-primary-light)",
            width: { sm: 30, md: 24 },
            height: { sm: 20, md: 16 },
            minWidth: { sm: 30, md: 24 },
            minHeight: { sm: 20, md: 16 },
          }}
        />
        <IconButton
          sx={{
            display: shouldHide ? "none" : "flex",
          }}
          onClick={customCloseDrawer}
        >
          <CloseXIcon
            width={24}
            height={24}
            sx={{ color: "var(--color-primary-light)" }}
          />
        </IconButton>
      </Toolbar>
      <Divider
        sx={{ borderColor: "var(--color-custom-blue-2)", marginBottom: 80 }}
      />
      <List>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: shouldHide ? "center" : "initial",
              padding: "12px 8px",
            }}
            onClick={() => setDashboardList((prev) => !prev)}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                width: 16,
                height: 16,
                marginRight: shouldHide ? 0 : 8,
                justifyContent: "center",
              }}
            >
              <HomeIcon
                sx={{
                  width: 16,
                  height: 16,
                  color: "var(--color-primary-light)",
                }}
              />
            </ListItemIcon>
            {!shouldHide && (
              <>
                <ListItemText
                  primary="Dashboard"
                  sx={{
                    [`& .${listItemTextClasses.primary}`]: { fontSize: 14 },
                  }}
                />
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
                <ListItemButton
                  sx={{
                    padding: "12px 0 12px 46px",
                    ...(pagePath === "analytics" && {
                      backgroundColor: "var(--color-custom-blue-2)",
                      borderLeft: "2px solid var(--color-primary-lighter-alt)",
                    }),
                  }}
                >
                  <ListItemText
                    primary="Analytics"
                    sx={{
                      [`& .${listItemTextClasses.primary}`]: { fontSize: 14 },
                    }}
                  />
                </ListItemButton>
              </Link>
            </List>
          </Collapse>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: shouldHide ? "center" : "initial",
              padding: "12px 8px",
            }}
            onClick={() => setProductCatalogueList((prev) => !prev)}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                width: 16,
                height: 16,
                marginRight: shouldHide ? 0 : 8,
                justifyContent: "center",
              }}
            >
              <TagIcon
                sx={{
                  width: 16,
                  height: 16,
                  color: "var(--color-primary-light)",
                }}
              />
            </ListItemIcon>
            {!shouldHide && (
              <>
                <ListItemText
                  primary="Product Catalogue"
                  sx={{
                    [`& .${listItemTextClasses.primary}`]: { fontSize: 14 },
                  }}
                />
                {productCatalogueList ? (
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
                <ListItemButton
                  sx={{
                    padding: "12px 0 12px 46px",
                    ...(pagePath === "products" && {
                      backgroundColor: "var(--color-custom-blue-2)",
                      borderLeft: "2px solid var(--color-primary-lighter-alt)",
                    }),
                  }}
                >
                  <ListItemText
                    primary="Products"
                    sx={{
                      [`& .${listItemTextClasses.primary}`]: { fontSize: 14 },
                    }}
                  />
                </ListItemButton>
              </Link>
              <Link href="/product-catalogue/categories">
                <ListItemButton
                  sx={{
                    padding: "12px 0 12px 46px",
                    ...(pagePath === "categories" && {
                      backgroundColor: "var(--color-custom-blue-2)",
                      borderLeft: "2px solid var(--color-primary-lighter-alt)",
                    }),
                  }}
                >
                  <ListItemText
                    primary="Categories"
                    sx={{
                      [`& .${listItemTextClasses.primary}`]: { fontSize: 14 },
                    }}
                  />
                </ListItemButton>
              </Link>
            </List>
          </Collapse>
        </ListItem>
      </List>
    </>
  );
}
