import type { Metadata } from "next";
import { resolveProjectMedia } from "@/content/media";
import { getProjectById, getProjectSlug, projects } from "@/content/projects";
import ProjectDetail from "@/pages/ProjectDetail";
import { notFound, redirect } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({ id: getProjectSlug(project) }));
}

function formatMetaDescription(description: string) {
  const maxLength = 155;

  if (description.length <= maxLength) {
    return description;
  }

  const snippet = description.slice(0, maxLength - 3).trim();
  const sentenceEnd = Math.max(
    snippet.lastIndexOf("."),
    snippet.lastIndexOf("!"),
    snippet.lastIndexOf("?"),
  );

  if (sentenceEnd >= 80) {
    return snippet.slice(0, sentenceEnd + 1);
  }

  const lastSpace = snippet.lastIndexOf(" ");
  const trimmed = snippet
    .slice(0, lastSpace > 0 ? lastSpace : snippet.length)
    .replace(/[.,;:]+$/, "");

  return `${trimmed}...`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: "Project Not Found | Gretchen Ugalde",
    };
  }

  const resolvedProject = resolveProjectMedia(project);

  const title = `${resolvedProject.title} | Gretchen Ugalde`;
  const contextParts = [resolvedProject.theatre, resolvedProject.year].filter(Boolean);
  const description = formatMetaDescription(contextParts.length > 0
    ? `${resolvedProject.title} scenic design by Gretchen Ugalde for ${contextParts.join(", ")}. ${resolvedProject.description}`
    : `${resolvedProject.title} scenic design by Gretchen Ugalde. ${resolvedProject.description}`);
  const ogImage = resolvedProject.cardImage ?? resolvedProject.heroImage;

  const canonicalSlug = getProjectSlug(project);

  return {
    title,
    description,
    alternates: {
      canonical: `/portfolio/${canonicalSlug}`,
    },
    openGraph: {
      title,
      description,
      url: `/portfolio/${canonicalSlug}`,
      siteName: "Gretchen Ugalde",
      type: "article",
      images: [
        {
          url: ogImage,
          alt: resolvedProject.cardAltText ?? `${resolvedProject.title} scenic design by Gretchen Ugalde`,
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
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  const canonicalSlug = getProjectSlug(project);

  if (id !== canonicalSlug) {
    redirect(`/portfolio/${canonicalSlug}`);
  }

  return <ProjectDetail />;
}
