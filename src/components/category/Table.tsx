"use client";
import {
  JSX,
  MouseEvent,
  ChangeEvent,
  useState,
  useMemo,
  useReducer,
} from "react";

import CategoryTableHead from "./TableHeader";
import CategorySearchBar from "./SearchBar";
import DeleteCategory from "./Delete";

import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TablePagination from "@mui/material/TablePagination";
import IconButton from "@mui/material/IconButton";

import ColorBox from "@/components/kit/form/ColorBox";
import Link from "@/components/kit/navbar/Link";

import CreateIcon from "@mui/icons-material/CreateOutlined";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

import { CategoryType, TableOrder } from "./type";

import {
  getComparator,
  deleteDialogReducer,
} from "./utils";

const rowsPerPage = 10;

type Props = {
  categories: CategoryType[];
};

export default function CategoryTable({ categories }: Props): JSX.Element {
  const [deleteDialogState, deleteDialogDispatcher] = useReducer(
    deleteDialogReducer,
    {
      open: false,
      id: "",
      name: "",
    }
  );

  const [order, setOrder] = useState<TableOrder>("asc");
  const [orderBy, setOrderBy] = useState<keyof CategoryType>("name");
  const [page, setPage] = useState(0);

  const handleRequestSort = (
    event: MouseEvent<unknown>,
    property: keyof CategoryType
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const deleteCategory = () => {
    console.log("deleted!");
    deleteDialogDispatcher({ type: "close" });
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - categories.length) : 0;

  const visibleRows = useMemo(
    () =>
      categories
        .slice()
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [categories, order, orderBy, page, rowsPerPage]
  );

  return (
    <Stack direction="column" spacing={24} sx={{ marginTop: 24 }}>
      <CategorySearchBar />
      <Paper
        elevation={0}
        sx={{
          border: "1px solid var(--color-primary-light)",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <TableContainer>
          <Table aria-labelledby="tableTitle" size="small">
            <CategoryTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    tabIndex={-1}
                    key={row.name}
                    sx={{
                      "&:not(:last-child)": {
                        borderBottomColor: "var(--color-custom-grey-30)",
                      },
                    }}
                  >
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      sx={{
                        padding: "11px 12px",
                        width: {
                          md: "60%",
                          lg: "70%",
                        },
                        position: "sticky",
                        left: 0,
                        backgroundColor: "#ffffff",
                      }}
                    >
                      {row.name}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        padding: "13px 12px",
                        width: {
                          md: "10%",
                          lg: "10%",
                        },
                      }}
                    >
                      {row.id}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        padding: "9px 12px",
                        width: {
                          md: "10%",
                          lg: "10%",
                        },
                      }}
                    >
                      <ColorBox color={row.color} />
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        padding: "11px 12px",
                        width: {
                          md: "20%",
                          lg: "10%",
                        },
                      }}
                    >
                      <Stack direction="row" spacing={20}>
                        <Link href={`/product-catalogue/categories/${row.id}`}>
                          <IconButton>
                            <CreateIcon sx={{ width: 20, height: 20 }} />
                          </IconButton>
                        </Link>
                        <IconButton
                          onClick={() =>
                            deleteDialogDispatcher({
                              type: "open",
                              payload: {
                                id: row.id,
                                name: row.name,
                              },
                            })
                          }
                        >
                          <DeleteIcon sx={{ width: 20, height: 20 }} />
                        </IconButton>
                      </Stack>
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 33 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={categories.length}
          rowsPerPageOptions={[]}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          showFirstButton
          showLastButton
        />
      </Paper>
      <DeleteCategory
        name={deleteDialogState.name}
        open={deleteDialogState.open}
        close={() => deleteDialogDispatcher({ type: "close" })}
        confirmAction={deleteCategory}
      />
    </Stack>
  );
}
