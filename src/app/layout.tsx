import { JSX, ReactNode, PropsWithChildren } from "react";
import type { Metadata } from "next";

import ThemeRegistry from "@/theme/ThemeRegistry";

import HeaderWithDrawer from "@/components/layout/HeaderWithDrawer";

import "@/assets/css/font.css";
import "@/assets/css/color.css";
import "@/assets/css/global.css";

export const metadata: Metadata = {
  title: "Bit Template",
  description: "A resume project",
};

export default function RootLayout({
  children,
}: PropsWithChildren): JSX.Element {
  const isAuthorized = false;

  let theChild = children;

  if (isAuthorized) {
    theChild = <HeaderWithDrawer>{children}</HeaderWithDrawer>;
  }

  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: "mui" }}>{theChild}</ThemeRegistry>
      </body>
    </html>
  );
}
