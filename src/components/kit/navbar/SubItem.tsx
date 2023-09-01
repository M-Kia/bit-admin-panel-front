import { JSX } from "react";

import classNames from "classnames";
import { Box } from "@mui/material";

export type Props = {
  text: string;
  isSelected: boolean;
};

export default function SubItem({ text, isSelected }: Props): JSX.Element {
  return (
    <Box
      className={classNames("font-segoe-ui", {
        selected: isSelected,
      })}
      component="a"
      sx={{
        padding: "12px auto 12px 46px",
        backgroundColor: "var(--color-custom-blue-1)",
        position: "relative",
        textDecoration: "none",
        color: "var(--color-grey-10)",
        fontWeight: 400,
        fontSize: "14px",
        "&:hover": {
          backgroundColor: "var(--color-theme-dark)",
        },
        "&.selected::before": {
          content: "",
          position: "absolute",
          width: "2px",
          top: "1px",
          left: "1px",
          bottom: "1px",
          backgroundColor: "var(--color-theme-lighter-alt",
        },
      }}
    >
      {text}
    </Box>
  );
}
