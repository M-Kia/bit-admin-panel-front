import { JSX } from "react";

import CategoryHeader from "@/components/category/Header";
import CategoryTable from "@/components/category/Table";

import { CategoryType } from "@/components/category/type";

const data: CategoryType[] = [
  {
    id: "C01",
    name: "Category01",
    color: "#f765a3",
  },
  {
    id: "C02",
    name: "Category02",
    color: "#a155b9",
  },
  {
    id: "C03",
    name: "Category03",
    color: "#1ddd8d",
  },
  {
    id: "C04",
    name: "Category04",
    color: "#16bfd6",
  },
  {
    id: "C05",
    name: "Category05",
    color: "#f765a3",
  },
  {
    id: "C06",
    name: "Category06",
    color: "#a155b9",
  },
  {
    id: "C07",
    name: "Category07",
    color: "#1ddd8d",
  },
  {
    id: "C08",
    name: "Category08",
    color: "#16bfd6",
  },
  {
    id: "C09",
    name: "Category09",
    color: "#f765a3",
  },
  {
    id: "C10",
    name: "Category10",
    color: "#a155b9",
  },
  {
    id: "C11",
    name: "Category11",
    color: "#1ddd8d",
  },
  {
    id: "C12",
    name: "Category12",
    color: "#16bfd6",
  },
];

export default function Category(): JSX.Element {
  return (
    <>
      <CategoryHeader />
      <CategoryTable categories={data} />
    </>
  );
}
