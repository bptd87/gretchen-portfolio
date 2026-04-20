import type { Metadata } from "next";
import { resolveMediaUrl } from "@/content/media";
import { projects } from "@/content/projects";
import { redirect } from "next/navigation";

const featuredProject = projects[0];
const ogImage =
  resolveMediaUrl(featuredProject.cardImage ?? featuredProject.heroImage) ??
  featuredProject.cardImage ??
  featuredProject.heroImage;
const title = "Portfolio | Gretchen Ugalde";
const description =
  "Explore scenic design work by Gretchen Ugalde, including production photos, renderings, drafting, and process imagery.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Gretchen Ugalde",
    type: "website",
    images: [
      {
        url: ogImage,
        alt:
          featuredProject.cardAltText ??
          "Gretchen Ugalde scenic design portfolio preview image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

export default function Page() {
  redirect("/");
}
