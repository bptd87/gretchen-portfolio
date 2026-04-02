import type { Metadata } from "next";
import { resolveProjectMedia } from "@/content/media";
import { getProjectById, getProjectSlug, projects } from "@/content/projects";
import ProjectDetail from "@/pages/ProjectDetail";
import { notFound, redirect } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({ id: getProjectSlug(project) }));
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
  const description = contextParts.length > 0
    ? `${resolvedProject.title} scenic design by Gretchen Ugalde for ${contextParts.join(", ")}. ${resolvedProject.description}`
    : `${resolvedProject.title} scenic design by Gretchen Ugalde. ${resolvedProject.description}`;
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
