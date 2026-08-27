import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Okta Quotes",
  description:
    "A responsive quotes landing page built for the UI Engineer technical exercise.",
};

const themeScript = `
  try {
    const savedTheme = localStorage.getItem("theme");

    document.documentElement.dataset.theme =
      savedTheme === "dark"
        ? "dark"
        : "light";
  } catch {
    document.documentElement.dataset.theme = "light";
  }
`;

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={geist.variable}
      data-theme="light"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: themeScript,
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}