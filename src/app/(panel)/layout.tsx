import { JSX, PropsWithChildren } from "react";

import HeaderWithDrawer from "@/components/layout/HeaderWithDrawer";
import Footer from "@/components/layout/Footer";

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
