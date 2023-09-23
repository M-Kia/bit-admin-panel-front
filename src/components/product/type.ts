// table types
export type ProductType = {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  price: number;
};

export type TableOrder = "asc" | "desc";

// delete dialog types
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

// edit dialog types
export type EditDialogState = {
  open: boolean;
  data: ProductType;
};

export type EditDialogAction =
  | {
      type: "open";
      payload: ProductType;
    }
  | { type: "close" };
