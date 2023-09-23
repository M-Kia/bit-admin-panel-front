import { JSX, PropsWithChildren } from "react";

import MainPanel from "@/components/layout/MainPanel";

export default function PanelLayout({
  children,
}: PropsWithChildren): JSX.Element {
  return <MainPanel>{children}</MainPanel>;
}
