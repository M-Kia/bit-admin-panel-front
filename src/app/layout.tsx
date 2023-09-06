import { JSX, ReactNode } from "react";
import type { Metadata } from "next";

import ThemeRegistry from "@/theme/ThemeRegistry";

import "@/assets/css/font.css";
import "@/assets/css/color.css";
import "@/assets/css/global.css";

export const metadata: Metadata = {
  title: "Bit Template",
  description: "A resume project",
};

type Props = {
  panel: ReactNode;
  login: ReactNode;
};

export default function RootLayout({ panel, login }: Props): JSX.Element {
  const isAuthorized = false;

  console.log({isAuthorized})
  return (
    <html lang="en">
      <body>
        <header
          style={{ width: "100%", height: "20vh", backgroundColor: "black" }}
        />
        <ThemeRegistry options={{ key: "mui" }}>
          {isAuthorized ? panel : login}
        </ThemeRegistry>
      </body>
    </html>
  );
}
