export type CategoryType = {
  id: string;
  name: string;
  color: string;
}

export type TableOrder = "asc" | "desc";

export type DeleteDialogState = {
  open: boolean;
  id: string;
  name: string;
};

export type DeleteDialogAction =
  | {
      type: "open";
      payload: {
        id: string;
        name: string;
      };
    }
  | { type: "close" };
