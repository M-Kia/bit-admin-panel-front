import { JSX } from "react";

import ProductHeader from "@/components/product/Header";
import ProductTable from "@/components/product/Table";

import { ProductType } from "@/components/product/type";

const data: ProductType[] = [
  {
    id: "P01",
    name: "Product01",
    category: "Category1",
    categoryId: "C01",
    price: 500
  },
  {
    id: "P02",
    name: "Product02",
    category: "Category1",
    categoryId: "C01",
    price: 500
  },
  {
    id: "P03",
    name: "Product03",
    category: "Category1",
    categoryId: "C01",
    price: 500
  },
  {
    id: "P04",
    name: "Product04",
    category: "Category2",
    categoryId: "C02",
    price: 500
  },
  {
    id: "P05",
    name: "Product05",
    category: "Category2",
    categoryId: "C02",
    price: 500
  },
  {
    id: "P06",
    name: "Product06",
    category: "Category2",
    categoryId: "C02",
    price: 500
  },
  {
    id: "P07",
    name: "Product07",
    category: "Category3",
    categoryId: "C03",
    price: 500
  },
  {
    id: "P08",
    name: "Product08",
    category: "Category3",
    categoryId: "C03",
    price: 500
  },
  {
    id: "P09",
    name: "Product09",
    category: "Category3",
    categoryId: "C03",
    price: 500
  },
  {
    id: "P10",
    name: "Product10",
    category: "Category4",
    categoryId: "C04",
    price: 500
  },
  {
    id: "P11",
    name: "Product11",
    category: "Category4",
    categoryId: "C04",
    price: 500
  },
  {
    id: "P12",
    name: "Product12",
    category: "Category4",
    categoryId: "C04",
    price: 500
  },
];

export default function Product(): JSX.Element {
  return (
    <>
      <ProductHeader />
      <ProductTable products={data} />
    </>
  );
}
