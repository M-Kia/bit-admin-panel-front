import { JSX } from "react";
import { RedirectType } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";

export default function Main(): JSX.Element {
  redirect("/dashboard/analytics", RedirectType.replace);
}
