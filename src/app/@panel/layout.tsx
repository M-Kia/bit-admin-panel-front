import { JSX, PropsWithChildren } from "react";

import HeaderWithDrawer from "@/components/layout/HeaderWithDrawer";

type Props = PropsWithChildren;

export default function PanelLayout({ children }: Props): JSX.Element {
  return (
    <>
      <HeaderWithDrawer>
        {children}
      </HeaderWithDrawer>
    </>
  );
}
