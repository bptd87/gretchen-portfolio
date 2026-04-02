import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Providers } from "./providers";
import "../client/src/index.css";

export const metadata: Metadata = {
  title: "Gretchen Ugalde | Scenic Design Portfolio",
  description:
    "Scenic design portfolio for Gretchen Ugalde featuring theatrical production work, process imagery, and creative collaboration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
