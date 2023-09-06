import { JSX } from "react";
import { notFound } from "next/navigation";

import AddEditCategory from "@/components/category/new-category";

export default async function NewCategory({
  params: { id },
}: {
  params: { id: string };
}): Promise<JSX.Element> {
  // if (isNaN(+id)) {
  //   return notFound();
  // }

  return <AddEditCategory categoryId={id} />;
}
