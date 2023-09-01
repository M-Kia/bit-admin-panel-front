import { TableOrder, DeleteDialogAction, DeleteDialogState } from "./type";

/**
 *
 * @param a first argument
 * @param b second argument
 * @param orderBy the key that array should be sorted by that.
 * @returns
 */
export function descendingComparator<T>(
  a: T,
  b: T,
  orderBy: keyof T
): -1 | 0 | 1 {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

/**
 *
 * @param order ascending or descending
 * @param orderBy key that array should be sorted by that
 * @returns
 */
export function getComparator<Key extends keyof any>(
  order: TableOrder,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return (a, b) =>
    (order === "desc" ? 1 : -1) * descendingComparator(a, b, orderBy);
}
export function deleteDialogReducer(
  prevState: DeleteDialogState,
  action: DeleteDialogAction
): DeleteDialogState {
  switch (action.type) {
    case "open":
      return {
        ...prevState,
        ...action.payload,
        open: true,
      };
    case "close":
      return {
        ...prevState,
        open: false,
      };
  }
}
