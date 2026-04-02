import type { Metadata } from "next";
import About from "@/pages/About";

export const metadata: Metadata = {
  title: "About | Gretchen Ugalde",
  description:
    "Learn more about scenic designer Gretchen Ugalde, her background, and her approach to theatrical storytelling through space.",
};

export default function Page() {
  return <About />;
}
