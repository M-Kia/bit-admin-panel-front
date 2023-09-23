"use client";
import { JSX, MouseEvent } from "react";

import Box from "@mui/material/Box";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";

import { visuallyHidden } from "@mui/utils";

import { TableOrder, ProductType } from "./type";

interface HeadCell {
  id: keyof ProductType;
  label: string;
}

const headCells: readonly HeadCell[] = [
  {
    id: "name",
    label: "Name",
  },
  {
    id: "id",
    label: "Id",
  },
  {
    id: "category",
    label: "Category",
  },
  {
    id: "price",
    label: "Price",
  },
];

type CategoryTableHeadProps = {
  onRequestSort: (
    event: MouseEvent<unknown>,
    property: keyof ProductType
  ) => void;
  order: TableOrder;
  orderBy: string;
};

export default function CategoryTableHead({
  order,
  orderBy,
  onRequestSort,
}: CategoryTableHeadProps): JSX.Element {
  const createSortHandler = (property: keyof ProductType) => {
    return (event: MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };
  };

  return (
    <TableHead>
      <TableRow
        sx={{
          backgroundColor: "var(--color-primary-lighter-alt)",
          borderBottomColor: "var(--color-custom-grey-30)",
        }}
      >
        {headCells.map((headCell, index) => (
          <TableCell
            key={headCell.id}
            align="left"
            padding="normal"
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{
              ...(index === 0 && {
                position: "sticky",
                top: 0,
                left: 0,
                zIndex: 3,
                backgroundColor: "var(--color-primary-lighter-alt)",
              }),
            }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
              sx={{
                color: "var(--color-custom-grey-190)",
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell
          sx={{
            color: "var(--color-custom-grey-190)",
            fontSize: 14,
            fontWeight: 600,
            userSelect: "none",
          }}
        >
          Action
        </TableCell>
      </TableRow>
    </TableHead>
  );
}
