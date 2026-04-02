import type { Metadata } from "next";
import Resume from "@/pages/Resume";

export const metadata: Metadata = {
  title: "Resume | Gretchen Ugalde",
  description:
    "View and download Gretchen Ugalde's scenic design resume, including theatre experience, education, and production work.",
};

export default function Page() {
  return <Resume />;
}
