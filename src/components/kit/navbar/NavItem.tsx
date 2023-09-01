import { JSX } from "react";

import { Box } from "@mui/material";

import SubItem, { Props as SubItemProps } from "./SubItem";
import { DownArrowIcon, HomeIcon, UpArrowIcon } from "../icon";

type Props = {
  text: string;
  icon: "home";
  subItems: SubItemProps[];
  isSelected: boolean;
};

export default function NavItem({
  text,
  icon,
  subItems,
  isSelected,
}: Props): JSX.Element {
  return (
    <>
      <Box
        component="a"
        sx={{
          padding: "14px 8px",
          backgroundColor: "var(--color-custom-blue-1)",
          textDecoration: "none",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          "&:hover": {
            backgroundColor: "var(--color-theme-dark)",
          },
        }}
      >
        <Box>
          {icon === "home" ? <HomeIcon /> : null}
          <Box
            component="span"
            sx={{ display: "inline-block", marginLeft: "8px" }}
          >
            {text}
          </Box>
        </Box>
        {isSelected ? <UpArrowIcon /> : <DownArrowIcon />}
      </Box>
      {isSelected
        ? subItems.map((prop, index) => (
            <SubItem key={`${text}-${index}`} {...prop} />
          ))
        : null}
    </>
  );
}
