import type { Metadata } from "next";
import Portfolio from "@/pages/Portfolio";

export const metadata: Metadata = {
  title: "Gretchen Ugalde | Scenic Design Portfolio",
  description:
    "Static scenic design portfolio for Gretchen Ugalde featuring theatrical production work, renderings, drafting, and process imagery.",
};

export default function Page() {
  return <Portfolio />;
}
