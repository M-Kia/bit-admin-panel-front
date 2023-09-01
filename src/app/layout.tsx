import { JSX, PropsWithChildren } from "react";
import type { Metadata } from "next";

import ThemeRegistry from "@/theme/ThemeRegistry";

import "@/assets/css/font.css";
import "@/assets/css/color.css";
import "@/assets/css/global.css";

export const metadata: Metadata = {
  title: "Bit Template",
  description: "A resume project",
};

type Props = PropsWithChildren;

export default function RootLayout({ children }: Props): JSX.Element {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: "mui" }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
