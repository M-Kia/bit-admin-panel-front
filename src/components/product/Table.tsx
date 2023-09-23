"use client";
import { JSX, MouseEvent, useState, useMemo, useReducer } from "react";

import CategoryTableHead from "./TableHeader";
import CategorySearchBar from "./SearchBar";

import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow, { tableRowClasses } from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TablePagination from "@mui/material/TablePagination";
import IconButton from "@mui/material/IconButton";

import CreateIcon from "@mui/icons-material/CreateOutlined";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

import { ProductType, TableOrder } from "./type";

import { deleteDialogReducer, editDialogReducer, getComparator } from "./utils";
import DeleteProduct from "./Delete";
import AddEditProduct from "./AddEdit";

const rowsPerPage = 10;

type Props = {
  products: ProductType[];
};

export default function ProductTable({ products }: Props): JSX.Element {
  const [deleteDialogState, deleteDialogDispatcher] = useReducer(
    deleteDialogReducer,
    {
      open: false,
      id: "",
      name: "",
    }
  );
  const [editDialogState, editDialogDispatcher] = useReducer(
    editDialogReducer,
    {
      open: false,
      data: {
        id: "",
        name: "",
        category: "",
        categoryId: "",
        price: 0,
      },
    }
  );

  const [order, setOrder] = useState<TableOrder>("asc");
  const [orderBy, setOrderBy] = useState<keyof ProductType>("name");
  const [page, setPage] = useState(0);

  const handleRequestSort = (
    event: MouseEvent<unknown>,
    property: keyof ProductType
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - products.length) : 0;

  const visibleRows = useMemo(
    () =>
      products
        .slice()
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [products, order, orderBy, page]
  );

  return (
    <>
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
                        backgroundColor: "#ffffff",
                        [`&.${tableRowClasses.hover}:hover`]: {
                          backgroundColor: "hsl(0deg 0% 92.16%)",
                        },
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
                            lg: "68%",
                          },
                          position: "sticky",
                          left: 0,
                          backgroundColor: "inherit",
                        }}
                      >
                        {row.name}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          padding: "13px 8px",
                          width: {
                            md: "10%",
                            lg: "8%",
                          },
                        }}
                      >
                        {row.id}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          padding: "13px 8px 13px 12px",
                          width: {
                            md: "10%",
                            lg: "8%",
                          },
                        }}
                      >
                        {row.category}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          padding: "13px 8px 13px 12px",
                          width: {
                            md: "10%",
                            lg: "8%",
                          },
                        }}
                      >
                        {row.price}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          padding: "11px 12px",
                          width: {
                            md: "10%",
                            lg: "8%",
                          },
                        }}
                      >
                        <Stack direction="row" spacing={20}>
                          <IconButton
                            onClick={() =>
                              editDialogDispatcher({
                                type: "open",
                                payload: row,
                              })
                            }
                          >
                            <CreateIcon sx={{ width: 20, height: 20 }} />
                          </IconButton>
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
            count={products.length}
            rowsPerPageOptions={[]}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            showFirstButton
            showLastButton
          />
        </Paper>
      </Stack>
      <DeleteProduct
        name={deleteDialogState.name}
        open={deleteDialogState.open}
        close={() => deleteDialogDispatcher({ type: "close" })}
      />
      <AddEditProduct
        previousData={editDialogState.data}
        open={editDialogState.open}
        onClose={() => editDialogDispatcher({ type: "close" })}
      />
    </>
  );
}
