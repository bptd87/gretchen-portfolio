import type { Metadata } from "next";
import { resolveMediaUrl } from "@/content/media";
import { aboutPageContent } from "@/content/pages/about";
import About from "@/pages/About";

const ogImage =
  resolveMediaUrl(aboutPageContent.images.portrait.src) ??
  aboutPageContent.images.portrait.src;
const title = "About | Gretchen Ugalde";
const description =
  "Learn more about scenic designer Gretchen Ugalde, her background, and her approach to theatrical storytelling through space.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title,
    description,
    url: "/about",
    siteName: "Gretchen Ugalde",
    type: "profile",
    images: [
      {
        url: ogImage,
        alt: aboutPageContent.images.portrait.alt,
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
  return <About />;
}
