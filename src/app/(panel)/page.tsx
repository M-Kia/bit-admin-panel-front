import { JSX } from "react";
import { RedirectType } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default function Main(): JSX.Element {
  const token = cookies().has("token") ? cookies().get("token")?.value : null;
  if (token === null) {
    redirect("/sign-up", RedirectType.replace);
  }

  return <main></main>;
}
