import type { Metadata } from "next";
import { resolveMediaUrl } from "@/content/media";
import { projects } from "@/content/projects";
import Resume from "@/pages/Resume";

const featuredProject = projects[0];
const ogImage =
  resolveMediaUrl(featuredProject.cardImage ?? featuredProject.heroImage) ??
  featuredProject.cardImage ??
  featuredProject.heroImage;
const title = "Resume | Gretchen Ugalde";
const description =
  "View and download Gretchen Ugalde's scenic design resume, including theatre experience, education, and production work.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    title,
    description,
    url: "/resume",
    siteName: "Gretchen Ugalde",
    type: "profile",
    images: [
      {
        url: ogImage,
        alt:
          featuredProject.cardAltText ??
          "Gretchen Ugalde scenic design resume preview image",
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
  return <Resume />;
}
